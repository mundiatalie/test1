import { prisma } from "../src/lib/prisma";
import { RegisterType } from "@prisma/client";

async function main() {
  const project = await prisma.project.findFirst();
  if (!project) {
    throw new Error("Run /api/demo to create a project first.");
  }

  await prisma.correspondenceItem.create({
    data: {
      projectId: project.id,
      source: "manual_upload",
      sender: "superintendent@demo.com",
      recipients: "ca@builder.com",
      subject: "RFI 101 - Plant room access",
      receivedAt: new Date(),
      classification: RegisterType.RFI,
      confidence: 0.9,
      extractedFields: {
        reference: "RFI-101",
        noticeDue: "2024-08-19"
      }
    }
  });

  console.log("Seeded demo correspondence.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
