import logo from "../assets/photos/logo.svg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HStack, Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Navigation() {
  const [display, setDisplay] = useState('none');
  const location = useLocation()

  const getActiveClassName = (path) => {
    return location.path === path ? 'active' : '';
  }
  return (
    <HStack justify='center' mb={'30px'} spacing={'5%'}>
      <Flex pt={'10px'}>
        <img src={logo} alt='logo' className="logo" width={"148px"} height={"40px"} />
      </Flex>
      <Flex display={['none' , 'none' , 'flex' , 'flex']}
        >
        <ul className="Nav">
          <li><NavLink to="/" className={getActiveClassName('/')}>Home</NavLink></li>
          <li><NavLink to='/about' className={getActiveClassName('/about')}>About</NavLink></li>
          <li><NavLink to='/menu' className={getActiveClassName('/menu')}>Menu</NavLink></li>
          <li><NavLink to='/bookingpage' className={getActiveClassName('/bookingpage')}>Reservation</NavLink></li>
          <li><NavLink to='/login' className={getActiveClassName('/login')}>Login</NavLink></li>
        </ul>
      </Flex>
      <IconButton
        aria-label="Open Menu"
        boxSize='2em'
        mr={2}
        icon={<HamburgerIcon />}
        display={['flex' , 'flex' , 'none' ,'none']}
        onClick={() => setDisplay('flex')}
        pos={'absolute'}
        top={2}
        right={0}
      />
      <Flex
        className="mobile-menu"
        w='100vw'
        h='100vh'
        zIndex={20}
        pos='fixed'
        top={display === 'flex' ? '0' : '-100%'}
        display={['flex' , 'flex' , 'none' ,'none']}
        left='0'
        overflowY='auto'
        flexDir='column'
        align='center'
        bgColor="white"
        transition="top 0.3s ease-in-out"
      >
        <Flex justify={"flex-end"}>
          <IconButton
            aria-label="Close Button"
            icon={<CloseIcon />}
            mt={'2'}
            mr={'2'}
            boxSize='2em'
            onClick={() => setDisplay('none')}
            pos={'absolute'}
            top={2}
            right={0}
          />
        </Flex>
        <Flex   flexDir='column'>
          <li><NavLink to="/" className={getActiveClassName('/')}>Home</NavLink></li>
          <li><NavLink to='/about' className={getActiveClassName('/about')}>About</NavLink></li>
          <li><NavLink to='/menu' className={getActiveClassName('/menu')}>Menu</NavLink></li>
          <li><NavLink to='/bookingpage' className={getActiveClassName('/bookingpage')}>Reservation</NavLink></li>
          <li><NavLink to='/login' className={getActiveClassName('/login')}>Login</NavLink></li>
        </Flex>
        <Flex>
              <img src={logo} alt='logo' className="logo" width={"148px"} height={"40px"} />
         </Flex>
      </Flex>
    </HStack>
  );
}

export default Navigation;