import {  Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const NavBar = () => {

  
   
  return (

    <Flex direction='row' alignItems='Center' justifyContent='space-around' py={5} px={10} h={150} bg='beige'>
        <Box>LOGO</Box>

        

        <HStack  gap={6} h='100%'>

            <Box ><Text  w='auto' fontSize={18} fontFamily='sans-serif'>HOME</Text></Box>
            <Box ><Text  w='auto' fontSize={18} fontFamily='sans-serif'>ABOUT US</Text></Box>
            <Box ><Text  w='auto' fontSize={18} fontFamily='sans-serif'>OUR PROGRAMS</Text></Box>
            <Box ><Text  w='auto' fontSize={18} fontFamily='sans-serif'>GET INVOLVED</Text></Box>
            <Box ><Text  w='auto' fontSize={18} fontFamily='sans-serif'>NEWS & UPDATES</Text></Box>
            <Box ><Text  w='auto' fontSize={18} fontFamily='sans-serif'>CONTACT US</Text></Box>
            <Button w={40} colorScheme='green' py={5} fontSize={20}>Donate</Button>
        </HStack>
        
       
    </Flex>
  )
}

export default NavBar