import { Card } from "@/components/ui/Card";

const projects = [
  {
    title: "Venex API",
    description:
      "Python backend API for fetching Venezuela currency exchange rates using FastAPI and Supabase.",
    technologies: ["Python", "FastAPI", "Supabase"],
    repo: "https://github.com/jesusjsg/venex-api",
  },
  {
    title: "Expense Tracker",
    description:
      "A lightweight web application to track expenses, built with Slim PHP and a simple responsive interface.",
    technologies: ["PHP", "Slim"],
    repo: "https://github.com/jesusjsg/expense-tracker",
  },
  {
    title: "Instant Dollar (Chrome Extension)",
    description:
      "A Chrome extension that calculates Bolívares using different exchange rates to help users compare and convert easily.",
    technologies: ["JavaScript", "Chrome API"],
    repo: "https://github.com/jesusjsg/instant-dollar",
  },
];

export const Projects = () => {
  return (
    <section className="mt-10 sm:mt-14" id="projects">
      <h2 className="mb-5 font-medium dark:text-purple-500">Projects</h2>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => (
          <Card key={i} {...project} />
        ))}
      </div>
    </section>
  );
};
