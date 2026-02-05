import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { appendRegisterRow } from "@/lib/google/sheets";

export async function POST(request: Request) {
  const payload = await request.json();
  const { correspondenceItemId, registerType, values } = payload as {
    correspondenceItemId: string;
    registerType: string;
    values: string[];
  };

  const item = await prisma.correspondenceItem.findUnique({ where: { id: correspondenceItemId } });
  if (!item) {
    return NextResponse.json({ error: "Correspondence item not found" }, { status: 404 });
  }

  const registerRow = await appendRegisterRow(registerType, values);
  const registerEntry = await prisma.registerEntry.create({
    data: {
      projectId: item.projectId,
      type: item.classification,
      referenceNo: values[0],
      title: values[1],
      description: values[2],
      dateReceived: new Date(item.receivedAt),
      dateDue: item.extractedFields?.noticeDue ? new Date() : null,
      fromParty: item.sender,
      toParty: item.recipients,
      correspondenceItemId: item.id,
      rowId: registerRow.rowId
    }
  });

  await prisma.correspondenceItem.update({
    where: { id: item.id },
    data: { status: "REGISTERED" }
  });

  return NextResponse.json({ registerEntry, registerRow });
}
