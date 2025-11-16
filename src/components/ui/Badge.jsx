export const Badge = ({ content, key }) => {
  return (
    <span
      key={key}
      className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
    >
      {content}
    </span>
  );
};
