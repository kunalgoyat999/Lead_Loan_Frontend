import { Select } from "@chakra-ui/react"
import { useState } from "react"


const SelectInput = ({placeholder, options=[]}) => {
let [option , setOption] = useState(options);
    return (
      <>
        <Select fontSize='small' placeholder={`${placeholder}`} >
      {
    option.forEach((opt)=>{
        return(
            <option value={`${opt}`}>{opt}</option>
        )
    })
      }
      </Select>
      </>
    )
}

export default SelectInput;