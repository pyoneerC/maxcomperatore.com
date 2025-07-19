export const socialMediaLinks = [
  { label: "LinkedIn", url: "...", icon: "LinkedInIcon", className: "linkedin" },
  { label: "GitHub",   url: "...", icon: "GithubIcon",   className: "github" },
] as const;

export type IconKey = typeof socialMediaLinks[number]["icon"];
export interface SocialMediaLink {
  label: string;
  url: string;
  icon: IconKey;
  className: string;
}
