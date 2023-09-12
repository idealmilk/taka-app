"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <Link href="/" onClick={() => signOut()}>
      Sign Out
    </Link>
  );
};

export default SignOut;
