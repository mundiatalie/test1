export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Project setup wizard</h2>
        <p className="mt-2 text-sm text-slate-600">
          Connect your Google Workspace, choose a Drive folder, and initialise the register Sheets.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">1. Google Workspace connect</p>
            <p className="mt-1 text-sm text-slate-600">
              Authorise Gmail, Drive, Docs, and Sheets with least-privilege scopes.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">2. Drive folder structure</p>
            <p className="mt-1 text-sm text-slate-600">
              Automatically create /01_Contracts, /02_Correspondence, /03_Registers, /04_Drafts, /05_Claims.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">3. Register templates</p>
            <p className="mt-1 text-sm text-slate-600">
              Link or create Google Sheets with predefined columns for RFI, EOT, Variation, Claim, Invoice.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-700">4. Contract rules</p>
            <p className="mt-1 text-sm text-slate-600">
              Set time bars, notice defaults, and approval roles (PM/CA/Superintendent).
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-lg border border-brand-100 bg-brand-50 p-4 text-sm text-brand-700">
          Wizard automation is wired to /api/demo for now. Hook in Google API credentials to go live.
        </div>
      </div>
    </div>
  );
}
