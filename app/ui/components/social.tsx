import Image from "next/image";
type SocialProps = {
  children?: React.ReactNode;
  alt: string;
  name: string;
  link: string;
  svgLogo: any;
};

export default function Social({
  children,
  alt,
  name,
  link,
  svgLogo,
}: SocialProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer" title={name}>
      {children}
      <p className="text-sm">{name}</p>
    </a>
  );
}
