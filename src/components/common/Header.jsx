export const Header = () => {
  return (
    <header className="sticky top-4 z-50 w-full flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex flex-wrap justify-center gap-2 px-3 py-1.5 rounded-3xl bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xs border border-gray-200 dark:border-neutral-700 shadow-lg">
        <a
          href="#about"
          className="py-1 px-3 dark:text-neutral-400 dark:hover:text-purple-700 rounded-lg transition text-sm"
        >
          About
        </a>
        <a
          href="#work"
          className="py-1 px-3 dark:text-neutral-400 dark:hover:text-purple-700 rounded-lg transition text-sm"
        >
          Work
        </a>
        <a
          href="#projects"
          className="py-1 px-3 dark:text-neutral-400 dark:hover:text-purple-700 rounded-lg transition text-sm"
        >
          Projects
        </a>
      </nav>
    </header>
  );
};
