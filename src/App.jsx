import { Layout } from "@/layout/Layout";
import { About } from "@/pages/About";
import { Work } from "@/pages/Work";
import { Projects } from "@/pages/Projects";

export default function App() {
  return (
    <Layout>
      <About />
      <Work />
      <Projects />
    </Layout>
  );
}
