import Link from "next/link";

const alerts = [
  {
    id: "alert-1",
    title: "EOT notice due",
    project: "Metro Health Fitout",
    due: "Due in 2 days",
    status: "Time bar"
  },
  {
    id: "alert-2",
    title: "Variation 17 pending",
    project: "Northbank Apartments",
    due: "Overdue by 1 day",
    status: "Overdue"
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Projects overview</h2>
        <p className="mt-2 text-sm text-slate-600">
          Track correspondence volume, active registers, and critical time bars across all projects.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs text-slate-500">Active projects</p>
            <p className="text-lg font-semibold text-slate-900">3</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs text-slate-500">Inbox items</p>
            <p className="text-lg font-semibold text-slate-900">42</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-xs text-slate-500">Due in 7 days</p>
            <p className="text-lg font-semibold text-slate-900">5</p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Critical alerts</h2>
          <Link href="/projects" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            View inboxes
          </Link>
        </div>
        <div className="mt-4 space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
              <div>
                <p className="font-semibold text-slate-900">{alert.title}</p>
                <p className="text-sm text-slate-600">{alert.project}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-rose-600">{alert.due}</p>
                <p className="text-xs text-slate-500">{alert.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
