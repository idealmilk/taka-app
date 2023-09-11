import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 padding-x">
          <h1>Wagwan {session?.user?.name} this is your dashboard g</h1>
        </div>
      </div>
    </section>
  );
}
