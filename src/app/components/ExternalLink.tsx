/* eslint-disable @next/next/no-img-element */
const ExternalLink = ({
  href,
  imageSrc,
  alt,
  npm,
}: {
  href: string;
  imageSrc: string;
  alt: string;
  npm?: boolean;
}) => {
  return (
    <a href={href} target="_blank">
      <img
        className={`h-[30px] sm:h-[40px] ${
          !npm && "w-[30px] sm:w-[40px] rounded-full"
        } cursor-pointer`}
        src={imageSrc}
        alt={alt}
      />
    </a>
  );
};

export default ExternalLink;
