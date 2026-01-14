import { JSX } from "solid-js";

export default function Input({ class: userClassAttr, children, ...props}: JSX.IntrinsicElements["input"]) {
  const classAttr = `
  flex h-10 w-full rounded-md border border-slate-600 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:border-rose-500 transition-colors disabled:cursor-not-allowed disabled:opacity-50
  sigma:text-sigma-bright sigma:border-sigma-bright sigma:focus:border-sigma-bright
  ` + (userClassAttr ? " " + userClassAttr : "");
  return <input class={classAttr} {...props}/>
}

