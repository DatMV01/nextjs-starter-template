import clsx from "clsx";
import { ElementType, ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<ElementType> {
  className?: string;
  children: ReactNode;
  fluid?: boolean;
  noPadding?: boolean;
  breakpoint?: "sm" | "md" | "lg" | "xl" | "2xl";
  as?: React.ElementType;
}

const Container = ({
  className = "",
  children,
  fluid = false,
  breakpoint,
  as: Comp = "div",
  id,
}: ContainerProps) => {
  const breakpoints = {
    sm: "max-w-[640px]",
    md: "max-w-[768px]",
    lg: "max-w-[1024px]",
    xl: "max-w-[1280px]",
    "2xl": "max-w-[1536px]",
  };

  const maxWidth = fluid
    ? "max-w-none"
    : breakpoint
      ? breakpoints[breakpoint]
      : breakpoints["2xl"];

  return (
    <Comp className={clsx("mx-auto w-full px-4", maxWidth, className)} id={id}>
      {children}
    </Comp>
  );
};

export default Container;
