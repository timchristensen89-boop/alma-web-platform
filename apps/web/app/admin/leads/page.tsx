import { prisma } from "@/lib/prisma";

type EnquiryRow = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  venue: string;
  enquiryType: string;
  message: string;
  createdAt: Date;
};

export default async function LeadsPage() {
  const enquiries: EnquiryRow[] = await prisma.enquiry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#EFE8DC] px-6 pb-20 pt-32 text-[#253326]">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold">Leads</h1>

        <div className="mt-10 space-y-4">
          {enquiries.map((e) => (
            <div
              key={e.id}
              className="rounded-2xl border border-[#253326]/10 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-[#684A4A]">
                <span>{e.venue}</span>
                <span>•</span>
                <span>{e.enquiryType}</span>
                <span>•</span>
                <span>{new Date(e.createdAt).toLocaleString()}</span>
              </div>

              <h2 className="mt-2 text-xl font-semibold">{e.name}</h2>

              <p className="mt-1 text-sm text-[#253326]/70">{e.email}</p>
              {e.phone && (
                <p className="text-sm text-[#253326]/70">{e.phone}</p>
              )}

              <p className="mt-4 text-[#253326]/80">{e.message}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
