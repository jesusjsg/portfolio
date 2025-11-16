import { Card } from "@/components/ui/Card";

const projects = [
  {
    title: "Venex API",
    description:
      "Python backend API for fetching Venezuela currency exchange rates using FastAPI and Supabase.",
    image:
      "https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop",
    technologies: ["Python", "FastAPI", "Supabase"],
  },
  {
    title: "Expense Tracker",
    description:
      "A lightweight web application to track expenses, built with Slim PHP and a simple responsive interface.",
    image:
      "https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop",
    technologies: ["PHP", "Slim"],
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
