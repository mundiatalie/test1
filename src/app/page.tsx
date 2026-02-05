import Link from "next/link";

const highlights = [
  {
    title: "Google Workspace-native",
    description: "Connect Gmail, Drive, Sheets, and Docs without forcing a platform migration."
  },
  {
    title: "Australian CA workflows",
    description: "Built for AS4000/AS2124 style processes with configurable time bars."
  },
  {
    title: "Registers + drafts in minutes",
    description: "Auto-classify correspondence, populate registers, and generate notices fast."
  }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-brand-600">MVP demo</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">
              CA Agent for Australian SME Contractors
            </h1>
            <p className="mt-4 text-slate-600">
              A Google-native contract administration copilot that ingests correspondence, classifies it, writes to
              registers, drafts notices, and tracks time bars.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                View projects
              </Link>
              <Link
                href="/projects/new"
                className="rounded-md border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Start project wizard
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase text-slate-500">Key outcomes</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>✅ Correspondence inbox with CA classification</li>
              <li>✅ Register writing to Google Sheets (mocked)</li>
              <li>✅ Draft notices into Google Docs templates</li>
              <li>✅ Time bar alerts + audit logging</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
