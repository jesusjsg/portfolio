export const Footer = () => {
  return (
    <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <a
              href="mailto:jesusjsgdev@gmail.com"
              className="text-xs text-gray-600 dark:text-neutral-400 underline"
            >
              Contact
            </a>
          </div>

          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              Turtle lover - 2025
            </p>
          </div>

          <div>
            <a
              className="text-xs text-gray-600 dark:text-neutral-400 underline"
              href="https://github.com/jesusjsg"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
