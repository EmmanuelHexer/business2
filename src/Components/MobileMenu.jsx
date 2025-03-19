import NavLinks from "../Utility/NavLinks";

const MobileMenu = () => {
  const links = NavLinks();
  return (
    <div>
      <nav className="nav mobile-nav">
        <ul className="mobile-menu">
          {links.map(({ name, url }, index) => (
            <li key={index}>
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
