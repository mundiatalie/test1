const attachments = [
  { name: "RFI_012.pdf", link: "https://drive.google.com" },
  { name: "Site_Photo.jpg", link: "https://drive.google.com" }
];

export default function ItemDetailPage({ params }: { params: { id: string; itemId: string } }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Correspondence item</h2>
        <p className="text-sm text-slate-600">Project {params.id}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">Classification</p>
            <p className="text-lg font-semibold text-brand-700">RFI (92%)</p>
            <p className="mt-2 text-sm text-slate-600">
              Subject: RFI 012 - Basement slab waterproofing
            </p>
            <p className="text-sm text-slate-600">From: superintendent@metrohealth.com</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-slate-500">Key fields</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>Reference: RFI-012</li>
              <li>Date received: 12 Aug 2024</li>
              <li>Notice due: 19 Aug 2024</li>
              <li>Required response: waterproofing detail confirmation</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700">
            Confirm classification
          </button>
          <button className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            Generate register entry
          </button>
          <button className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50">
            Generate draft
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-900">Attachments</h3>
        <ul className="mt-3 space-y-2 text-sm text-brand-700">
          {attachments.map((file) => (
            <li key={file.name}>
              <a href={file.link} className="hover:underline">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
