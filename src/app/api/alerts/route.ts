import { NextResponse } from "next/server";
import { addDays, isBefore } from "date-fns";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const entries = await prisma.registerEntry.findMany({
    where: { dateDue: { not: null } },
    include: { project: true }
  });

  const alerts = entries
    .filter((entry) => entry.dateDue)
    .map((entry) => {
      const due = entry.dateDue as Date;
      const soon = addDays(new Date(), 3);
      const status = isBefore(due, new Date()) ? "overdue" : isBefore(due, soon) ? "due_soon" : "ok";
      return {
        id: entry.id,
        project: entry.project.name,
        type: entry.type,
        due,
        status
      };
    });

  return NextResponse.json({ alerts });
}
