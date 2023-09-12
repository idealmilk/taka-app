"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  children,
  rightIcon,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`primary-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{children}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;
