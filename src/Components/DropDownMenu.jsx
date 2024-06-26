import { Box, HStack, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaArrowDown } from "react-icons/fa6";
import './DropDownMenu.css'
import { FaClock } from "react-icons/fa6";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { IoPeople } from "react-icons/io5";



function DropDownMenu ({options, selected , setSelected , objKey }) {
    const [isActive , setIsActive] = useState(false);
    const [selectedColor , setSelectedColor] = useState('white')
    const [fontColor , setFontColor] = useState('white')

    useEffect(() => {
        if (!options.includes(selected[objKey])) {
            setSelectedColor('white')
            setFontColor('black')
        } else {
            setSelectedColor('#495E57')
            setFontColor('white')
        }
    },[selected])


    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       if (
    //         event.target.closest(".drop-menu-contiaer") === null &&
    //         isActive === true
    //       ) {
    //         setIsActive(false);
    //       }
    //     };

    //     document.addEventListener("click", handleClickOutside);

    //     return () => {
    //       document.removeEventListener("click", handleClickOutside);
    //     };
    //   }, [isActive]);

    return (
        <VStack className="drop-menu-cotianer"
        gap={'0'}
        mb={'20px'}
        userSelect={'none'}
        alignItems={'baseline'}>
            <HStack onClick={e => {setIsActive(!isActive)}}
                    justifyContent={'space-between'}
                    alignContent={'center'}
                    boxShadow='dark-lg'
                    bg={selectedColor}
                    color={fontColor}
                    w='30vh'
                    h={'10wh'}
                    pr={'10px'}
                    pl={'10px'}
                    cursor={'pointer'}
                    className="drop-down-menu-container"
                    transform={'1sec'}>
              {selected[objKey] === 'Choose Occasion' && <LiaGlassCheersSolid />}
              {selected[objKey] === 'Choose Number' && <IoPeople />}
              {selected[objKey] === 'Choose Time' && <FaClock />}
                <Box className="drop-menu-button"
                p={'5px'}
                mb={'0'}>
                    {selected[objKey]}
                </Box>
                {!isActive && <FaArrowDown />}
            </HStack>
            <VStack className="drop-menu-content" 
            position={'relative'}>
            {isActive &&
                <Box
                    w='30vh'
                    pos={'absolute'}
                    m='auto'
                >
                    {options.map(options => (
                        <Box className="dropDown-item"
                        key={options}
                        onClick={e => {
                            setIsActive(false)
                            setSelected({...selected,[objKey]:options})}}
                            boxShadow='dark-lg'
                            bg={'white'}
                            w='30vh'
                            p={'8px'}
                            color={'black'}
                            cursor={'pointer'}>
                        {options}
                    </Box>
                    ))}
                </Box>}
              </VStack>
        </VStack>
    )
}

export default DropDownMenu




