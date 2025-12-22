import { JSX } from "solid-js";

export default function Button(props: JSX.IntrinsicElements["button"]) {
  const { class: userClassAttr, ...rest } = props;
  const classAttr = "cursor-pointer select-none inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none bg-rose-600 text-white hover:bg-rose-700 h-10 px-4 py-2 shadow-sm" + (userClassAttr ? " " + userClassAttr : "");
  return <button {...rest} class={classAttr}>
    {props.children}
  </button>
}
