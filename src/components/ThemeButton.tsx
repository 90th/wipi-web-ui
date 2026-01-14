import { createMemo, createSignal, onCleanup, Show } from "solid-js";
import { useTheme } from "../providers/theme";
import Sigma from "lucide-solid/icons/sigma";
import log from "loglevel";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const sunImage = '/assets/images/sun.svg';
  const moonImage = '/assets/images/moon.svg';
  const img = createMemo(() => theme() == "dark" ? moonImage : sunImage);
  const SECRET_HOLD_DELAY_MS = 3000;
  let timeout : number | undefined;

  const toggleTheme = () => {
    switch (theme()) {
    case "light":
      setTheme("dark");
      break;
    case "dark":
    case "sigma":
      setTheme("light");
      break;
    }
  }

  const startHold = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();

    if (timeout) return;

    timeout = setTimeout(() => {
      setTheme("sigma");
      timeout = undefined;
    }, SECRET_HOLD_DELAY_MS);
  }

  const stopHold = () => {
    if (timeout) {
      log.debug("Secret theme hold stopped")
      clearTimeout(timeout);
      timeout = undefined;
      toggleTheme();
    }
  }

  return <button
    onPointerDown={startHold}
    onPointerUp={stopHold}
    class="
    cursor-pointer select-none px-2 rounded-full py-2 flex items-center justify-center border-2 border-gray-200 transition-colors hover:bg-gray-200
    dark:border-gray-700 dark:hover:bg-gray-700
    sigma:border-sigma-bright sigma:hover:bg-sigma-dim"
  >
    <Show when={theme() == "sigma"} fallback={<img class="h-8" src={img()} />}>
       <Sigma class="h-8 w-8" color="#00ffc8" />
    </Show>
  </button>
}
