import ExternalLink from "./ExternalLink";

const Header = () => {
  return (
    <div className="bg-[#201E1E] text-white px-5 sm:px-10 md:px-20 py-5 flex items-center justify-between">
      <h3 className="text-xl sm:block hidden font-medium">
        Future value calculator
      </h3>
      <h3 className="text-xl sm:hidden block font-medium">FVC</h3>
      <div className="flex items-center space-x-2 sm:space-x-5">
        <ExternalLink
          href="https://syketb.vercel.app"
          imageSrc="/syketb.png"
          alt="Syket Bhattachergee"
        />
        <ExternalLink
          href="https://github.com/syket-git/future-value-calculator"
          imageSrc="/github.png"
          alt="Future value calculator Github"
        />
        <ExternalLink
          href="https://www.npmjs.com/package/future-value-calculator?activeTab=readme"
          imageSrc="/npm.png"
          alt="Future value calculator NPM"
          npm={true}
        />
      </div>
    </div>
  );
};

export default Header;
