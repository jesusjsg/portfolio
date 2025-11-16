export const SocialButton = ({ text, icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="py-1 px-3 inline-flex items-center rounded-full gap-x-2 text-sm font-medium border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
    >
      {text}
      {icon}
    </a>
  );
};
