import Link from "next/link";

const projects = [
  {
    id: "proj_1",
    name: "Metro Health Fitout",
    client: "Metro Health",
    contract: "AS4000",
    inbox: 12
  },
  {
    id: "proj_2",
    name: "Northbank Apartments",
    client: "Vega Developments",
    contract: "AS2124",
    inbox: 18
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
          <p className="text-sm text-slate-600">Manage Google-connected project workspaces.</p>
        </div>
        <Link
          href="/projects/new"
          className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
        >
          New project
        </Link>
      </div>
      <div className="grid gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}/inbox`}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-brand-600"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                <p className="text-sm text-slate-600">
                  {project.client} • Contract {project.contract}
                </p>
              </div>
              <div className="rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold text-brand-700">
                {project.inbox} inbox items
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
