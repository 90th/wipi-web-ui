import { JSX, ParentProps } from "solid-js"
import { useTheme } from "../../providers/theme";

export function Card({class: userClass, classList: userClassList, children, ...rest}: JSX.IntrinsicElements["div"]) {
  const { theme } = useTheme();
  const classAttr = "border-2 border-gray-300 w-96 rounded-lg px-2" + (userClass ? " " + userClass : "");
  const classList = { "!border-gray-500": theme() == "dark", ...userClassList }
  return <div class={classAttr} classList={classList} {...rest}>
    {children}
  </div>
}

Card.Title = ({class: userClass, children, ...rest}: JSX.IntrinsicElements["h1"]) => {
  const classAttr = "pt-6 pb-2 text-xl font-black text-center" + (userClass ? " " + userClass : "");
  return <h1 class={classAttr} {...rest}>{children}</h1>;
}

Card.Body = ({class: userClass, classList: userClassList, children, ...rest}: JSX.IntrinsicElements["h1"]) => {
  const { theme } = useTheme();
  const classAttr = "border-t-2 border-gray-200 px-2 pt-4 pb-8" + (userClass ? " " + userClass : "");
  const classList = { "!border-gray-500": theme() == "dark", ...userClassList }
  return <div class={classAttr} classList={classList} {...rest}>{children}</div>;
}
