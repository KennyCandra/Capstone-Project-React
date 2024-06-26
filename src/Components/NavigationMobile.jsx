import { CloseIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Input, VStack, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom"
import logo from "../assets/photos/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import './NavigationMobile.css'
const NavgationMobile = () => {

  const location = useLocation()

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Cart", path: "/checkout" },
    { name: "Reservation", path: "/bookingpage" },
    { name: "Login", path: "/login" },
  ];

  const getActiveClassName = (path) => {
    return location.path === path ? 'active' : '';
  }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
        <div>
        <Button position={'absolute'} right={['5px', '5px', '5px', '70px']} top={'7px'} ref={btnRef} onClick={onOpen}>
            <GiHamburgerMenu style={{width : '20px' , height : '20px' , color : '#495E57'}}/>
        </Button>
        <Drawer
        isOpen={isOpen}
        placement ={"right"}
        onClose={onClose}
        finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Your Items</DrawerHeader>
                <DrawerBody>
                <ul className="Nav mobile">
                    {navigationItems.map(item => (
                        <li key={item.path}>
                            <NavLink to={item.path} className={getActiveClassName(item.path)}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </div>
    )
  }

export default NavgationMobile