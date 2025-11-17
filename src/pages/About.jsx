import { GithubIcon } from "@/assets/icons/GithubIcon";
import { LinkedinIcon } from "@/assets/icons/LinkedinIcon";
import { ResumeIcon } from "@/assets/icons/ResumeIcon";
import { SocialButton } from "@/components/ui/SocialButton";
import { useTyped } from "@/hooks/useTyped";

export const About = () => {
  const typedRef = useTyped(["Systems Engineer", "Backend Developer"]);

  return (
    <section className="mt-6" id="about">
      <div className="flex items-center gap-x-3">
        <div className="shrink-0">
          <img
            className="shrink-0 size-20 rounded-full"
            src="https://github.com/jesusjsg.png"
          />
        </div>
        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800 dark:text-purple-500">
            Jesus Santana
          </h1>
          <p className="text-sm text-gray-600 dark:text-neutral-400">
            <span ref={typedRef}></span>
          </p>
        </div>
      </div>
      <p className="mt-8 text-sm text-gray-600 dark:text-neutral-400">
        Backend developer specialized in designing and implementing
        high-performance systems. My main focus is on building robust and
        scalable APIs that enable integration and support the sustainable growth
        of applications. I apply software engineering best practices to deliver
        efficient, secure, and maintainable solutions.
      </p>
      <p className="mt-4 text-sm text-gray-600 dark:text-neutral-400">
        I am also interested in contributing to open source projects as a way to
        keep learning, share knowledge, and support the growth of the community.
      </p>{" "}
      <div className="social-network mt-6 flex gap-x-2">
        <SocialButton
          text="Github"
          icon={<GithubIcon />}
          href={"https://github.com/jesusjsg"}
        />
        <SocialButton
          text="LinkedIn"
          icon={<LinkedinIcon />}
          href="https://linkedin.com/in/jesús-santana"
        />
        <SocialButton text="Resume" icon={<ResumeIcon />} />
      </div>
    </section>
  );
};
