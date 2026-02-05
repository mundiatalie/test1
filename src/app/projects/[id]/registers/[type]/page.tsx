const registers = [
  {
    ref: "RFI-012",
    subject: "Basement slab waterproofing",
    from: "Superintendent",
    to: "CA Team",
    received: "2024-08-12",
    due: "2024-08-19",
    status: "Due"
  }
];

export default function RegisterPage({ params }: { params: { id: string; type: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          {params.type.toUpperCase()} register
        </h2>
        <p className="text-sm text-slate-600">Project: {params.id}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-7 gap-4 border-b border-slate-200 px-6 py-3 text-xs font-semibold uppercase text-slate-500">
          <span>Ref</span>
          <span>Subject</span>
          <span>From</span>
          <span>To</span>
          <span>Received</span>
          <span>Due</span>
          <span>Status</span>
        </div>
        <div className="divide-y divide-slate-100">
          {registers.map((row) => (
            <div key={row.ref} className="grid grid-cols-7 gap-4 px-6 py-4 text-sm">
              <span className="font-semibold text-slate-900">{row.ref}</span>
              <span>{row.subject}</span>
              <span>{row.from}</span>
              <span>{row.to}</span>
              <span>{row.received}</span>
              <span>{row.due}</span>
              <span className="text-brand-700">{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
