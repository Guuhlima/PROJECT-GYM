"use client"

import React from "react";

type HeaderProps = Omit<React.HTMLAttributes<HTMLElement>, "title"> & {
  heading: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  actionClassName?: string;
};

export default function Header({
  heading,
  action,
  className = "",
  actionClassName = "flex justify-end w-72",
  ...props
}: HeaderProps) {
  return (
    <header
      className={`container px-6 py-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 backdrop-blur-md shadow-lg shadow-blue-900/30 w-full flex items-center justify-between ${className}`.trim()}
      {...props}
    >
      <h2 className="text-2xl font-bold flex items-center gap-1">{heading}</h2>
      {action ? <div className={actionClassName}>{action}</div> : null}
    </header>
  );
}
