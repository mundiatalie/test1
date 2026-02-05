const auditLog = [
  {
    id: "log-1",
    action: "Correspondence classified",
    actor: "sophia@builder.com",
    timestamp: "2024-08-12 09:14",
    details: "RFI-012 mapped to RFI register"
  }
];

export default function AuditPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Audit trail</h2>
        <p className="text-sm text-slate-600">End-to-end record of CA actions.</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-4 gap-4 border-b border-slate-200 px-6 py-3 text-xs font-semibold uppercase text-slate-500">
          <span>Action</span>
          <span>Actor</span>
          <span>Timestamp</span>
          <span>Details</span>
        </div>
        <div className="divide-y divide-slate-100">
          {auditLog.map((entry) => (
            <div key={entry.id} className="grid grid-cols-4 gap-4 px-6 py-4 text-sm">
              <span className="font-semibold text-slate-900">{entry.action}</span>
              <span>{entry.actor}</span>
              <span>{entry.timestamp}</span>
              <span className="text-slate-600">{entry.details}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
