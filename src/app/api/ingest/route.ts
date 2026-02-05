import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { classifyCorrespondence } from "@/lib/classifier";
import { fetchLatestMessages, applyProcessedLabel } from "@/lib/google/gmail";
import { uploadAttachment } from "@/lib/google/drive";

export async function POST() {
  const project = await prisma.project.findFirst();
  if (!project) {
    return NextResponse.json({ error: "No project configured" }, { status: 400 });
  }

  const messages = await fetchLatestMessages();
  const createdItems = [];

  for (const message of messages) {
    const classification = classifyCorrespondence(message.subject, message.body);
    const attachmentIds = [];

    for (const attachment of message.attachments) {
      const uploaded = await uploadAttachment(attachment.name);
      attachmentIds.push(uploaded.fileId);
    }

    const item = await prisma.correspondenceItem.create({
      data: {
        projectId: project.id,
        source: "gmail",
        gmailThreadId: message.threadId,
        gmailMessageId: message.id,
        sender: message.sender,
        recipients: message.recipients,
        subject: message.subject,
        receivedAt: new Date(message.receivedAt),
        driveFileIds: attachmentIds,
        classification: classification.type,
        confidence: classification.confidence,
        extractedFields: classification.extractedFields
      }
    });

    await applyProcessedLabel(message.id);
    createdItems.push(item);
  }

  return NextResponse.json({ ingested: createdItems.length, items: createdItems });
}
