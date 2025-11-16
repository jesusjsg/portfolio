import { Badge } from "@/components/ui/Badge";

export const Card = ({ title, description, image, technologies = [] }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm sm:flex overflow-hidden hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-black dark:border-neutral-700 dark:shadow-neutral-700/50">
      <div className="shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[25%] sm:rounded-s-xl sm:max-w-44 md:rounded-se-none md:max-w-48">
        <img
          src={image}
          alt={title}
          className="size-full absolute top-0 start-0 object-cover"
        />
      </div>

      <div className="flex flex-wrap">
        <div className="p-3 flex flex-col h-full sm:p-5">
          <h3 className="text-md font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">
            {description}
          </p>

          {technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge content={tech} key={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
