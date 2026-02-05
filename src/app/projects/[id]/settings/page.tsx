export default function ProjectSettingsPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Project settings</h2>
        <p className="text-sm text-slate-600">Project: {params.id}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-700">Drive & Docs</p>
            <p className="mt-2 text-sm text-slate-600">Root folder: 01_Contracts/02_Correspondence/...</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-700">Sheets registers</p>
            <p className="mt-2 text-sm text-slate-600">RFI, EOT, Variation, Claim, Invoice registers linked.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-700">Contract rules</p>
            <p className="mt-2 text-sm text-slate-600">Default time bars, notice types, and approver roles.</p>
          </div>
          <div className="rounded-lg border border-slate-200 p-4">
            <p className="text-sm font-semibold text-slate-700">Access control</p>
            <p className="mt-2 text-sm text-slate-600">Workspace domain allowlist and role-based access.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
