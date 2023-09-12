"use client";

import { CustomButton } from "@/components";
import { FormEvent } from "react";

const SignOut = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // const formData = new FormData(event.currentTarget)
    // const response = await fetch('/api/submit', {
    //   method: 'POST',
    //   body: formData,
    // })

    // // Handle response if necessary
    // const data = await response.json()
    // // ...

    alert(`You badman, finally starting trapping that meta ting still`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto mt-16 mb-40 md:translate-x-20"
    >
      <div className="flex space-x-3 ">
        <input
          type="text"
          placeholder="Facebook id"
          className="flex-1 px-4 rounded-full focus:outline-none shadow"
        />
        <CustomButton containerStyles="md:-translate-x-40" btnType="submit">
          <span>Generate the ting</span>
        </CustomButton>
      </div>
    </form>
  );
};

export default SignOut;
