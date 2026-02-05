export type GmailMessage = {
  id: string;
  threadId: string;
  sender: string;
  recipients: string;
  subject: string;
  receivedAt: string;
  body: string;
  attachments: Array<{ name: string; driveFileId?: string }>;
};

export async function fetchLatestMessages(): Promise<GmailMessage[]> {
  return [
    {
      id: "msg_1",
      threadId: "thread_1",
      sender: "superintendent@metrohealth.com",
      recipients: "ca@builder.com",
      subject: "RFI 012 - Basement slab waterproofing",
      receivedAt: new Date().toISOString(),
      body: "Please confirm waterproofing details. RFI attached.",
      attachments: [{ name: "RFI_012.pdf" }]
    }
  ];
}

export async function applyProcessedLabel(messageId: string) {
  return { messageId, label: "CA_AGENT_PROCESSED" };
}
