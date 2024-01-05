/* eslint-disable @next/next/no-img-element */
const ExternalLink = ({
  href,
  imageSrc,
  alt,
}: {
  href: string;
  imageSrc: string;
  alt: string;
}) => {
  return (
    <a href={href} target="_blank">
      <img
        className="w-[40px] h-[40px] rounded-full cursor-pointer"
        src={imageSrc}
        alt={alt}
      />
    </a>
  );
};

export default ExternalLink;
