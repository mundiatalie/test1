import { RegisterType } from "@prisma/client";

type ClassificationResult = {
  type: RegisterType;
  confidence: number;
  extractedFields: Record<string, string>;
};

const RULES: Array<{ keyword: string; type: RegisterType }> = [
  { keyword: "rfi", type: RegisterType.RFI },
  { keyword: "variation", type: RegisterType.VARIATION },
  { keyword: "eot", type: RegisterType.EOT },
  { keyword: "extension of time", type: RegisterType.EOT },
  { keyword: "payment claim", type: RegisterType.CLAIM },
  { keyword: "invoice", type: RegisterType.INVOICE },
  { keyword: "direction", type: RegisterType.DIRECTION },
  { keyword: "meeting", type: RegisterType.MEETING_MINUTES },
  { keyword: "notice", type: RegisterType.NOTICE },
  { keyword: "safety", type: RegisterType.SAFETY }
];

export function classifyCorrespondence(subject: string, body: string): ClassificationResult {
  const text = `${subject} ${body}`.toLowerCase();
  const match = RULES.find((rule) => text.includes(rule.keyword));
  const type = match?.type ?? RegisterType.OTHER;
  const confidence = match ? 0.86 : 0.55;

  const extractedFields: Record<string, string> = {};
  if (type === RegisterType.RFI) {
    extractedFields.reference = subject.match(/RFI\s?-?\s?(\d+)/i)?.[0] ?? "";
    extractedFields.noticeDue = "7 days";
  }
  if (type === RegisterType.EOT) {
    extractedFields.delayStart = "TBC";
    extractedFields.noticeDue = "5 days";
  }
  if (type === RegisterType.VARIATION) {
    extractedFields.estimatedCost = "$";
  }

  return { type, confidence, extractedFields };
}
