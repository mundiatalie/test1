import "../styles/globals.css";
import type { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "CA Agent",
  description: "Google-native contract administration copilot for Australian SME contractors."
};

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/admin/audit", label: "Audit" }
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-slate-50">
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-brand-600 text-white flex items-center justify-center font-semibold">
                  CA
                </div>
                <div>
                  <p className="text-sm text-slate-500">Google-native CA Agent</p>
                  <p className="text-lg font-semibold">Australian SME Contractors</p>
                </div>
              </div>
              <nav className="flex gap-6 text-sm text-slate-600">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-slate-900">
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/login"
                className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
              >
                Sign in
              </Link>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
