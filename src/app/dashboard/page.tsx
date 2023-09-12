import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { CustomButton, Form } from "@/components";
import { FormEvent } from "react";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <section>
      <div className="flex items-center justify-center pt-36">
        <h1 className="font-bold text-2xl">
          Wagwan {session?.user?.name} this is your dashboard g
        </h1>
      </div>

      <div className="flex items-center justify-center mx-auto mt-28 px-6 max-w-2xl text-center">
        <p>
          {session?.user?.name} fam, what are you playing at. You haven&apos;t
          connected your Facebook ad account yet! Do it quick time before I buss
          your lip open
        </p>
      </div>

      <Form />
    </section>
  );
}
