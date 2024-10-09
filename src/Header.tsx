import cross from "./assets/img/cross.png";
import burger from "./assets/img/menu.png";

type HeaderProps = {
  mobileNavRef: React.MutableRefObject<HTMLDivElement | null>;
  isMobileNavVisible: boolean;
  setIsMobileNavVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({
  mobileNavRef,
  isMobileNavVisible,
  setIsMobileNavVisible,
}: HeaderProps) => {
  const handleMobileNav = () => {
    if (isMobileNavVisible) {
      if (mobileNavRef.current)
        mobileNavRef.current.style.transform = "translateX(-100%)";
      setIsMobileNavVisible(false);
    } else {
      if (mobileNavRef.current)
        mobileNavRef.current.style.transform = "translateX(0)";
      setIsMobileNavVisible(true);
    }
  };
  return (
    <header className="flex gap-3 items-center justify-between px-3 py-2 bg-cream sticky top-0 shadow-lg z-10">
      <p className="font-display font-bold  text-xl lg:text-4xl cursor-pointer">
        <a href="#hero" className="hover:opacity-80">
          ວີຣຸນ
        </a>
      </p>
      <div className="flex items-center gap-2">
        <h1 className="text-sm lg:text-lg cursor-pointer font-light ">
          <a href="#hero" className="hover:opacity-80">
            VIROUN KATTYGNARATH
          </a>
        </h1>
        <div className="lg:hidden w-4 cursor-pointer" onClick={handleMobileNav}>
          <img src={isMobileNavVisible ? cross : burger} alt="mobile-menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
