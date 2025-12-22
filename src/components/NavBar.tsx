import { A } from "@solidjs/router";
import { useTheme } from "../providers/theme";
import Button from "./ui/Button";

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => {
    if (theme() == "light")
      setTheme("dark");
    else {
      setTheme("light");
    }
  }
  return <nav class="sticky top-0 z-50 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/assets/wipi.svg" class="h-8 w-8" />
        <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">WiPi Web UI</h1>
      </div>
      <div>
        <Button onClick={switchTheme} class="text-sm">
          {theme() === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </div>
    </div>
  </nav>;
}
