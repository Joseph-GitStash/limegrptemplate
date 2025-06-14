import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (props: {
    variant: "background" | "border" ;
    iconAfter?: ReactNode;
} &
    ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, variant, iconAfter,...rest } = props;
    return(
        <button className={twMerge(
            "group relative text-black px-5 py-2 inline-flex items-center h-[30px] justify-center w-[140px] group/button gap-2",
                variant === "background" && "w-fit ring-1 ring-black bg-black text-white",
                variant === "border" && " px-5 ring-1 ring-black",
                className)} {...rest}>
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span> }
        </button>
    )
}

export default Button