import { WorkTimelineIcon } from "@/assets/icons/WorkTimelineIcon";

export const Timeline = ({ experiences }) => {
  return (
    <div className="flex flex-col">
      {experiences.map((exp, index) => (
        <div key={index} className="group relative flex gap-x-5">
          <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-6 flex justify-center items-center">
              <WorkTimelineIcon />
            </div>
          </div>

          <div className="grow pb-8 group-last:pb-0">
            <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              {exp.dates}
            </h3>

            <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
              {exp.title}
            </p>

            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {exp.overview}
            </p>

            {exp.responsibilities && (
              <ul className="list-disc ms-6 mt-3 space-y-1.5">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
