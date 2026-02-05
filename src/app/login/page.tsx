export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Sign in</h2>
      <p className="mt-2 text-sm text-slate-600">
        Use your Google Workspace account to connect Gmail, Drive, Sheets, and Docs.
      </p>
      <button
        type="button"
        className="mt-6 w-full rounded-md bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700"
      >
        Connect with Google
      </button>
      <p className="mt-4 text-xs text-slate-500">
        Domain allowlist and least-privilege scopes are enforced by default.
      </p>
    </div>
  );
}
