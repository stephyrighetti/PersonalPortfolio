import Header from "./Header";
import HamburgerMenu from "./HamburgerMenu";

const Layout = ({ children, setShowMenu, showIcon, setShowIcon, showMenu }) => {
  return (
    <>
      {showMenu ? (
        <HamburgerMenu
          setShowMenu={setShowMenu}
          setShowIcon={setShowIcon}
          showMenu={showMenu}
        />
      ) : (
        <Header
          setShowMenu={setShowMenu}
          setShowIcon={setShowIcon}
          showIcon={showIcon}
        />
      )}
      <main>{children}</main>
    </>
  );
};

export default Layout;
