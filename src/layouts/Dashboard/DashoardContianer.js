import { Container,Grid, GridItem,Box,Center,Text, Image, Flex,Spacer, Stack,Link ,SimpleGrid} from '@chakra-ui/react'
import {Link as RLink,BrowserRouter} from 'react-router-dom'
import { useColorModeValue } from "@chakra-ui/color-mode";
import user1 from '../../assets/user1.png'
import {FaAngleDown} from 'react-icons/fa'
import { RiHomeSmile2Line } from "react-icons/ri";
import {IoCardOutline,IoExitOutline} from "react-icons/io5"
import {BiUser,BiHelpCircle} from 'react-icons/bi'
import DashRoute from './DashRoute/DashRoute';

export default function DashboardPage() {
    const yellowbtn = useColorModeValue('yellow.500')

    return(

        <BrowserRouter>
     <Grid
     p='25'
     h='90vh'
  w='120rem'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(12, 1fr)'
  gap={12}
>
  <GridItem rowSpan={7} colSpan={2} bg='white'>
   <Box bg='white' w='300px' h='800px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
        <Center m='35'>
        <SimpleGrid columns={3} spacing={3}>
        <Image w='10' src={user1} alt='user'/>
        <Stack>
        <Text color='gray' w='7rem'>Hello Jumoke</Text>
        </Stack>
       <Stack mx='46'>
       <FaAngleDown/>
       </Stack>
        </SimpleGrid>
        </Center>
        <Flex direction='column' align='center' mt='75'>
        <Center >
        <SimpleGrid columns={2}>
       <Stack>
       <RiHomeSmile2Line />
       </Stack>
        <Link to='/dashboard/home' as={RLink}>Home</Link>
        </SimpleGrid> 
       </Center>
       <Center pt='30'>
        <Stack pr='1'>
           <IoCardOutline/>
        </Stack>
        <Stack>
            <Link to='/dashboard/virtual-card' as={RLink}>Virtual Card</Link>
        </Stack>
    </Center>
    <Center pt='30'>
        <Stack pr='2'>
            <BiUser/>
        </Stack>
        <Stack>
            <Link as={RLink}>Account</Link>
        </Stack>
    </Center>
    <Center pt='30'>
        <Stack pr='2'>
            <BiHelpCircle/>
        </Stack>
        <Stack>
            <Link as={RLink}>Help</Link>
        </Stack>
    </Center>
    <Center pt='30'>
        <Stack>
            <Link as={RLink}>Refer & Reward </Link>
        </Stack>
    </Center>
    <Center pt='30'>
        <Stack pr='2'>
        <IoExitOutline/>
        </Stack>
        <Stack>
            <Link as={RLink}>Logout</Link>
        </Stack>
    </Center>
    </Flex>
   </Box>
  </GridItem>
  <GridItem colSpan={4} rowSpan={9} bg='white' >
 <DashRoute/>
  </GridItem>
</Grid>
  
</BrowserRouter>
    )
}