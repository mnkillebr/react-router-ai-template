import type { HTMLAttributes } from "react";

interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement>{}

export function ErrorMessage({className, ...props}: ErrorMessageProps) {
  return (
    <p {...props} className={`text-xs text-red-500 ${className}`}/>
  );
}