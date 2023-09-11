import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";

import { CustomButton } from "@/components";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Header = async () => {
  const session = await getServerSession(options);

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link
          href="/"
          className="flex font-bold text-xl justify-center items-center"
        >
          {/* <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          /> */}
          TEAM TAKA
        </Link>

        {session ? (
          <Link href="/dashboard">Dashboard</Link>
        ) : (
          <CustomButton
            btnType="button"
            containerStyles="text-hot-pink rounded-full bg-white min-w-[130px]"
          >
            <Link href="/dashboard">Sign in</Link>
          </CustomButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
