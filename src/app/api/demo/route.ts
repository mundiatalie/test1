import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createProjectFolders } from "@/lib/google/drive";
import { createRegisterSheets } from "@/lib/google/sheets";

export async function POST() {
  const projectName = "Demo Project";
  const drive = await createProjectFolders(projectName);
  const sheets = await createRegisterSheets(projectName);

  const project = await prisma.project.create({
    data: {
      name: projectName,
      client: "Demo Client",
      headContractor: "Demo Contractor",
      contractType: "AS4000",
      driveRootFolderId: drive.rootFolderId,
      sheetsRegisterIds: sheets,
      contractRules: {
        create: {
          noticeTypes: ["RFI", "EOT", "Variation", "Claim"],
          defaultTimebarsDays: {
            variationNotice: 5,
            eotNotice: 5,
            paymentClaim: 10
          },
          approvalRoles: {
            pm: "Project Manager",
            ca: "Contract Administrator",
            superintendent: "Superintendent"
          }
        }
      }
    }
  });

  return NextResponse.json({ project });
}
