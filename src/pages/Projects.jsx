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
    title: "Filesnap",
    description:
      "A command-line tool for managing files and directories, automating database seeding, bulk auditing, and smart cleanup.",
    technologies: ["Python", "PyPI", "CLI"],
    repo: "https://github.com/jesusjsg/filesnap",
    pypi: "https://pypi.org/project/filesnap/",
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
