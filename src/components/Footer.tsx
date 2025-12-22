export default function Footer() {
  return (
    <footer class="border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-950 transition-colors duration-200">
      <div class="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:py-0">
        <p class="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
          Copyright (C) Rdbo - 2025 - All rights reserved.
        </p>
        <p class="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
          For more information about the WiPi project, visit <a href="https://github.com/rdbo/wipi" class="font-medium underline underline-offset-4 hover:text-gray-900 dark:hover:text-gray-50">GitHub</a>
        </p>
      </div>
    </footer>
  )
}
