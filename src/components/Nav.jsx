import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 z-10 absolute w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} ale="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-[16px] uppercase text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <a
              href="#"
              className="font-montserrat leading-normal text-[16px] font-semibold uppercase text-black"
            >
              Sign In
            </a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
