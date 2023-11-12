import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import '../assests/css/myprofile.css';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { HiMinus, HiPlus } from 'react-icons/hi'


const DropdownBox = ({title,Component,borderLeft}) => {
    let [isOpen, setStatus] = useState(false)

    return (
        <>
        <Box bg='#eee' width='100%' my='0.5em' borderLeft={borderLeft ? borderLeft : ''} borderRadius='0.2em' fontSize='xl' h='2.5em' letterSpacing='wide' fontWeight='normal' onClick={()=>setStatus(!isOpen)} className='dropdownbox' >
          <Text >{title}</Text>
          <Text>{isOpen ? <HiMinus /> : <HiPlus />} </Text>
        </Box>
        <Box width='98%' m='auto' >
        {
            isOpen && <Component btnremove={true} wid='100%' />
        }
        </Box>
        </>
    )
}

export default DropdownBox;