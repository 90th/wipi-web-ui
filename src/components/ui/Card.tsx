import { JSX, ParentProps } from "solid-js"

export function Card({ class: userClass, classList: userClassList, children, ...rest }: JSX.IntrinsicElements["div"]) {
  const classAttr = "rounded-xl border border-gray-200 bg-white text-slate-950 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-slate-50 transition-colors duration-200" + (userClass ? " " + userClass : "");
  return <div class={classAttr} classList={userClassList} {...rest}>
    {children}
  </div>
}

Card.Title = ({ class: userClass, children, ...rest }: JSX.IntrinsicElements["h3"]) => {
  const classAttr = "flex flex-col space-y-1.5 p-6 font-semibold leading-none tracking-tight text-lg" + (userClass ? " " + userClass : "");
  return <h3 class={classAttr} {...rest}>{children}</h3>;
}

Card.Body = ({ class: userClass, classList: userClassList, children, ...rest }: JSX.IntrinsicElements["div"]) => {
  const classAttr = "p-6 pt-0" + (userClass ? " " + userClass : "");
  return <div class={classAttr} classList={userClassList} {...rest}>{children}</div>;
}
