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
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus
        ex sapien vitae pellentesque sem placerat. In id cursus mi pretium
        tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
        Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis
        massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper
        vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra
        inceptos himenaeos.
      </p>
      <div className="social-network mt-6 flex gap-x-2">
        <SocialButton text="Resume" icon={<ResumeIcon />} />
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
      </div>
    </section>
  );
};
