import logo from "../assets/photos/logo.svg";
import { NavLink, useLocation } from 'react-router-dom';
import { HStack, Flex, Image} from "@chakra-ui/react";

function Navigation() {

  const location = useLocation()

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Reservation", path: "/bookingpage" },
    { name: "Login", path: "/login" },
  ];

  const getActiveClassName = (path) => {
    return location.path === path ? 'active' : '';
  }
  return (
    <HStack justify='center' mb={'30px'} spacing={'5%'} flexWrap={"initial"}>
        <Image src={logo} alt='logo' className="logo" width={"148px"} height={"40px"} />
        <ul className="Nav">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={getActiveClassName(item.path)}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
    </HStack>
  );
}

export default Navigation;

