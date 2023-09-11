import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";

import { Hero } from "@/components";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
