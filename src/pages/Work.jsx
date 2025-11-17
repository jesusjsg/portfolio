import { Timeline } from "@/components/common/Timeline";

const experiences = [
  {
    dates: "April 2025 - Present",
    title: "FullStack Developer",
    company: "Global Business, C.A",
    overview:
      "Developing a FastAPI microservice using CLIP for image similarity and text search, and providing ongoing support for the primary backend in CakePHP.",
    responsibilities: [
      "Built a FastAPI microservice integrating CLIP to improve image similarity search and text matching.",
      "Optimizing existing backend features for performance and scalability.",
      "Providing ongoing maintenance and support for the primary CakePHP backend.",
    ],
  },
  {
    dates: "January 2024 - July 2024",
    title: "Software Engineering Intern",
    company: "Clover Internacional, C.A",
    overview:
      "Developed a web solution for travel expense control and internal vehicle tracking, improving transparency and efficiency in transportation management.",
    responsibilities: [
      "Built web applications using PHP, jQuery, and Bootstrap for internal processes.",
      "Streamlined registration and tracking of travel expenses and vehicle usage.",
      "Increased transparency and efficiency in transportation management.",
    ],
  },
];

export const Work = () => {
  return (
    <section className="mt-10 sm:mt-14" id="work">
      <h2 className="mb-5 font-medium dark:text-purple-500">Work Experience</h2>
      <Timeline experiences={experiences} />
    </section>
  );
};
