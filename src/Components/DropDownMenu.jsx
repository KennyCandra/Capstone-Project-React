import { Box, HStack, VStack } from "@chakra-ui/react"
import { useEffect, useState, useRef } from "react"
import { FaArrowDown, FaClock } from "react-icons/fa6"
import { LiaGlassCheersSolid } from "react-icons/lia"
import { IoPeople } from "react-icons/io5"
import { SiAirtable } from "react-icons/si";
import './DropDownMenu.css'

function DropDownMenu({ options, selected, setSelected, objKey, isActive, onToggle }) {
    const [selectedColor, setSelectedColor] = useState('white')
    const [fontColor, setFontColor] = useState('white')
    const dropdownRef = useRef(null)

    useEffect(() => {
        if (!options.includes(selected[objKey])) {
            setSelectedColor('white')
            setFontColor('black')
        } else {
            setSelectedColor('#495E57')
            setFontColor('white')
        }
    }, [selected, options, objKey])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onToggle()
            }
        }

        if (isActive) {
            document.addEventListener("click", handleClickOutside)
        }

        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isActive, onToggle])

    return (
        <VStack
            ref={dropdownRef}
            className="drop-menu-contianer"
            gap={'0'}
            mb={'20px'}
            userSelect={'none'}
            alignItems={'baseline'}
            position={'relative'}
        >
            <HStack
                onClick={onToggle}
                justifyContent={'space-between'}
                alignContent={'center'}
                boxShadow='dark-lg'
                bg={selectedColor}
                color={fontColor}
                w='14.75vw'
                h={'40px'}
                pr={'10px'}
                pl={'10px'}
                cursor={'pointer'}
                className="drop-down-menu-container"
                transform={'1sec'}
            >
                {selected[objKey] === 'Choose Occasion' && <LiaGlassCheersSolid />}
                {selected[objKey] === 'Choose Number' && <IoPeople />}
                {selected[objKey] === 'Choose Time' && <FaClock />}
                {selected[objKey] === 'Choose Place' && <SiAirtable />}
                <Box className="drop-menu-button" p={'5px'} mb={'0'}>
                    {selected[objKey]}
                </Box>
                {!isActive && <FaArrowDown />}
            </HStack>
            <VStack
                className="drop-menu-content"
                position={'absolute'}
                zIndex={'1'}
                top={'100%'}
            >
                {isActive && (
                    <Box>
                        {options.map(option => (
                            <Box
                                className="dropDown-item"
                                key={option}
                                onClick={() => {
                                    setSelected({ ...selected, [objKey]: option })
                                    onToggle()
                                }}
                                boxShadow='dark-lg'
                                bg={'white'}
                                w='14.75vw'
                                p={'8px'}
                                color={'black'}
                                cursor={'pointer'}
                            >
                                {option}
                            </Box>
                        ))}
                    </Box>
                )}
            </VStack>
        </VStack>
    )
}

export default DropDownMenu