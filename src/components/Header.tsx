import Link from "next/link";
import { getServerSession } from "next-auth";

import { CustomButton, SignOut } from "@/components";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Session } from "inspector";

const Header = async () => {
  const session = await getServerSession(options);

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
        <Link
          href="/"
          className="flex font-bold text-xl justify-center items-center"
        >
          TEAM TAKA
        </Link>

        {session ? (
          <div className="group inline-block relative">
            <button className="primary-btn">
              <span className="mr-1">{session.user?.name}</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
            <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
              <li className="">
                <Link
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                <SignOut />
              </li>
            </ul>
          </div>
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
