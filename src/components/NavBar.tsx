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
  return <nav class="flex w-full mb-2 shadow-gray-300 shadow-md" classList={{ "!shadow-gray-600": theme() == "dark" }}>
      <div class="flex items-center w-max pl-4 pr-8 py-2">
        <img src="/assets/wipi.svg" class="h-10 mr-2"/>
        <h1 class="text-2xl font-black">WiPi Web UI</h1>
      </div>
      <div class="pr-4 w-max">
        <Button onClick={switchTheme}>change theme</Button>
      </div>
  </nav>;
}
