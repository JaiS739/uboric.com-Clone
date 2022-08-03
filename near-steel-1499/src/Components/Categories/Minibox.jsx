import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const Minibox = ({mini,set}) => {
    const [bord,setbord] = useState("1px solid white")
    const handleset =(val)=>{  
        setbord("1px solid blue");  
        set(mini)
    }
  return (
    <div>
        <Box 
          onClick={()=>{handleset(mini)}} 
          onMouseEnter={()=>setbord("1px solid blue")} 
          onMouseLeave={()=>setbord("1px solid white")} 
          minH="50px" 
          style={{overflow:"hidden",border:`${bord}`,borderRadius:"0px"}} 
          maxW='sm' borderWidth='1px' borderRadius='lg' 
          overflow='hidden'>
            <Image style={{width:"100%",margin:"auto"}} src={mini}/>
        </Box>
    </div>
  )
}

export default Minibox