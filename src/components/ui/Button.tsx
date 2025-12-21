import { JSX } from "solid-js";

export default function Button(props: JSX.IntrinsicElements["button"]) {
  const { class: userClassAttr, ...rest } = props;
  const classAttr = "bg-rose-600 text-white px-2 py-1 rounded-sm font-bold uppercase" + (userClassAttr ? " " + userClassAttr : "");
  return <button {...rest} class={classAttr}>
    {props.children}
  </button>
}
