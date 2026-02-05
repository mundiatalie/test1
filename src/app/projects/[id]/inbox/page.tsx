import Link from "next/link";

const inboxItems = [
  {
    id: "item_1",
    subject: "RFI 012 - Basement slab waterproofing",
    sender: "superintendent@metrohealth.com",
    received: "2024-08-12",
    type: "RFI",
    confidence: 0.92
  },
  {
    id: "item_2",
    subject: "Variation Notice - HV duct reroute",
    sender: "pm@subcontractor.com",
    received: "2024-08-11",
    type: "Variation",
    confidence: 0.88
  }
];

export default function InboxPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Correspondence inbox</h2>
          <p className="text-sm text-slate-600">Project: {params.id}</p>
        </div>
        <div className="flex gap-3">
          <Link
            href={`/projects/${params.id}/drafts`}
            className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Drafts
          </Link>
          <Link
            href={`/projects/${params.id}/registers/rfi`}
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            Registers
          </Link>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 border-b border-slate-200 px-6 py-3 text-xs font-semibold uppercase text-slate-500">
          <span>Subject</span>
          <span>Sender</span>
          <span>Received</span>
          <span>Type</span>
          <span>Confidence</span>
        </div>
        <div className="divide-y divide-slate-100">
          {inboxItems.map((item) => (
            <Link
              key={item.id}
              href={`/projects/${params.id}/item/${item.id}`}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-4 text-sm hover:bg-slate-50"
            >
              <span className="font-semibold text-slate-900">{item.subject}</span>
              <span className="text-slate-600">{item.sender}</span>
              <span className="text-slate-600">{item.received}</span>
              <span className="font-semibold text-brand-700">{item.type}</span>
              <span className="text-slate-600">{Math.round(item.confidence * 100)}%</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
