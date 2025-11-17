import { Badge } from "@/components/ui/Badge";
import { GithubIcon } from "@/assets/icons/GithubIcon";

export const Card = ({ title, description, technologies = [], repo }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm sm:flex overflow-hidden hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-black dark:border-neutral-700 dark:shadow-neutral-700/50">
      <div className="flex flex-col grow p-3 sm:p-5">
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

        {repo && (
          <div className="text-end">
            <a
              href={repo}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-800 transition text-end"
            >
              <GithubIcon className="w-4 h-4 text-gray-800 dark:text-white" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
