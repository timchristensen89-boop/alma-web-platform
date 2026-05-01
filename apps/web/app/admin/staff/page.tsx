import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminStaffPage() {
  const [onboarding, timesheets] = await Promise.all([
    prisma.staffOnboarding.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
    prisma.staffTimesheet.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    }),
  ]);

  return (
    <main className="min-h-screen bg-[#EFE8DC] px-6 pb-20 pt-32 text-[#253326]">
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#253326]/50">
              Admin
            </p>
            <h1 className="mt-4 text-4xl font-semibold">Staff</h1>
          </div>

          <Link
            href="/staff"
            className="rounded-full bg-[#253326] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white"
          >
            Staff form
          </Link>
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Onboarding</h2>

          <div className="mt-5 grid gap-4">
            {onboarding.length === 0 && (
              <p className="rounded-2xl bg-white p-6 text-[#253326]/65">
                No onboarding submissions yet.
              </p>
            )}

            {onboarding.map((staff) => (
              <article
                key={staff.id}
                className="rounded-2xl border border-[#253326]/10 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#253326]/55">
                  <span>{staff.venue}</span>
                  <span>•</span>
                  <span>{staff.role}</span>
                  <span>•</span>
                  <span>{staff.employmentType}</span>
                  <span>•</span>
                  <span>{new Date(staff.createdAt).toLocaleString()}</span>
                </div>

                <h3 className="mt-2 text-xl font-semibold">
                  {staff.firstName} {staff.lastName}
                  {staff.preferredName ? ` (${staff.preferredName})` : ""}
                </h3>

                <div className="mt-4 grid gap-3 text-sm text-[#253326]/75 md:grid-cols-2">
                  <p>{staff.email}</p>
                  <p>{staff.phone}</p>
                  <p>Start: {staff.startDate || "Not provided"}</p>
                  <p>RSA expiry: {staff.rsaExpiry || "Not provided"}</p>
                  <p className="md:col-span-2">Address: {staff.address}</p>
                  <p className="md:col-span-2">
                    Emergency: {staff.emergencyName} · {staff.emergencyPhone}
                    {staff.emergencyRelation ? ` · ${staff.emergencyRelation}` : ""}
                  </p>
                  <p className="md:col-span-2">
                    Xero: {staff.xeroSyncStatus}
                    {staff.xeroSyncMessage ? ` · ${staff.xeroSyncMessage}` : ""}
                  </p>
                </div>

                {staff.notes && (
                  <p className="mt-4 text-sm leading-6 text-[#253326]/70">
                    {staff.notes}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold">Timesheets</h2>

          <div className="mt-5 grid gap-4">
            {timesheets.length === 0 && (
              <p className="rounded-2xl bg-white p-6 text-[#253326]/65">
                No timesheets submitted yet.
              </p>
            )}

            {timesheets.map((timesheet) => (
              <article
                key={timesheet.id}
                className="rounded-2xl border border-[#253326]/10 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-[#253326]/55">
                  <span>{timesheet.venue}</span>
                  <span>•</span>
                  <span>Week ending {timesheet.weekEnding}</span>
                  <span>•</span>
                  <span>{new Date(timesheet.createdAt).toLocaleString()}</span>
                </div>

                <h3 className="mt-2 text-xl font-semibold">
                  {timesheet.employeeName}
                </h3>

                <p className="mt-1 text-sm text-[#253326]/65">
                  {timesheet.email}
                </p>

                <div className="mt-5 grid gap-2 text-sm text-[#253326]/75 md:grid-cols-4">
                  <p>Mon {timesheet.mondayHours.toFixed(2)}</p>
                  <p>Tue {timesheet.tuesdayHours.toFixed(2)}</p>
                  <p>Wed {timesheet.wednesdayHours.toFixed(2)}</p>
                  <p>Thu {timesheet.thursdayHours.toFixed(2)}</p>
                  <p>Fri {timesheet.fridayHours.toFixed(2)}</p>
                  <p>Sat {timesheet.saturdayHours.toFixed(2)}</p>
                  <p>Sun {timesheet.sundayHours.toFixed(2)}</p>
                  <p className="font-semibold">
                    Total {timesheet.totalHours.toFixed(2)}
                  </p>
                </div>

                {timesheet.notes && (
                  <p className="mt-4 text-sm leading-6 text-[#253326]/70">
                    {timesheet.notes}
                  </p>
                )}

                <p className="mt-4 text-sm text-[#253326]/50">
                  Xero: {timesheet.xeroSyncStatus}
                  {timesheet.xeroSyncMessage ? ` · ${timesheet.xeroSyncMessage}` : ""}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
