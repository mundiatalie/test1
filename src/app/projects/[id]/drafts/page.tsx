const drafts = [
  {
    id: "draft_1",
    type: "EOT notice",
    status: "Drafted",
    updated: "2024-08-12",
    link: "https://docs.google.com"
  }
];

export default function DraftsPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Draft documents</h2>
        <p className="text-sm text-slate-600">Project: {params.id}</p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-4 gap-4 border-b border-slate-200 px-6 py-3 text-xs font-semibold uppercase text-slate-500">
          <span>Type</span>
          <span>Status</span>
          <span>Updated</span>
          <span>Link</span>
        </div>
        <div className="divide-y divide-slate-100">
          {drafts.map((draft) => (
            <div key={draft.id} className="grid grid-cols-4 gap-4 px-6 py-4 text-sm">
              <span className="font-semibold text-slate-900">{draft.type}</span>
              <span className="text-slate-600">{draft.status}</span>
              <span className="text-slate-600">{draft.updated}</span>
              <a href={draft.link} className="text-brand-700 hover:underline">
                Open in Docs
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
