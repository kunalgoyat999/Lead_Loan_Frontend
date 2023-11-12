import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  background,
} from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function PasswordInput({ name, value, onChange }) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        fontSize='small'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        name={name}
        value={value}
        onChange={onChange}
      />
      <InputRightElement width='4.5rem'>
        <Button bg='transparent' _hover={{background:'none'}} size='sm' onClick={handleClick}>
          {show ? <AiOutlineEye style={{height:'24px',width:'24px',color:'#BFBFBF'}} /> : <AiOutlineEyeInvisible style={{height:'24px',width:'24px',color:'#BFBFBF'}}/>}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput;
