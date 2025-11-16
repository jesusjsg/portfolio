import { Header } from "@/components/common/Header";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-black dark:text-neutral-200">
      <Header />
      <main className="content">
        <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
};
