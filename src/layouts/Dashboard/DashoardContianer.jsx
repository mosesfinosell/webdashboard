import {Grid, GridItem,Box,Center,Text, Image, Flex} from '@chakra-ui/react'
import {Link as RLink,BrowserRouter} from 'react-router-dom'
import { useColorModeValue } from "@chakra-ui/color-mode";
import user1 from '../../assets/user1.png'
import {FaAngleDown} from 'react-icons/fa'
import { RiHomeSmile2Line } from "react-icons/ri";
import {IoCardOutline,IoExitOutline} from "react-icons/io5"
import {BiUser,BiHelpCircle} from 'react-icons/bi'
import DashRoute from './DashRoute/DashRoute';

export default function DashboardPage() {
    // const yellowbtn = useColorModeValue('yellow.500')

    return(

        <BrowserRouter>
     <Grid
     p='25'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(12, 1fr)'
 display='flex'
>
  <GridItem rowSpan={7} colSpan={2} bg='white'>
   <Box bg='white' w='250px' h='800px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
        <Center p='45px'>
        <Flex display='flex' direction='row' alignItems='center'>
        <Image mr='15px' src={user1} alt='user'/>
        <Stack>
        <Text >Hello Jumoke</Text>
        </Stack>
       <Stack>
       <FaAngleDown/>
       </Stack>
        </Flex>
        </Center>

        <Flex display='flex' direction='column' alignItems='center' justifyContent='space-evenly'>
       
        <Box display='flex' alignItems='center' >
       <Stack pr='10px' fontSize='20px'>
       <RiHomeSmile2Line />
        </Stack>
        <Stack>
        <Text to='/dashboard/home' as={RLink}>Home</Text>
        </Stack>
        </Box>  
        <Box display='flex' alignItems='center' >
       <Stack pr='10px' fontSize='20px'>
       <RiHomeSmile2Line />
        </Stack>
        <Stack>
        <Text to='/dashboard/deals' as={RLink}>Deals</Text>
        </Stack>
        </Box> 
        <Box display='flex' alignItems='center' mt='20px'>
       <Stack pr='10px' fontSize='20px'>
         <IoCardOutline/>
         </Stack>
           <Stack>
           <Text to='/dashboard/virtual-card' as={RLink}>Virtual Card</Text>
           </Stack>
    </Box>
    <Box display='flex' alignItems='center' mt='20px'>
       <Stack pr='10px' fontSize='20px'>
            <BiUser/>
        </Stack>
        <Stack>
        <Text to='/dashboard/account' as={RLink}>Account</Text>
        </Stack>
    </Box>
    <Box display='flex' alignItems='center' mt='20px'>
       <Stack pr='10px' fontSize='20px'>
            <BiHelpCircle/>
        </Stack>
        <Stack>
        <Text to='/dashboard/help' as={RLink}>Help</Text>
        </Stack>
    </Box>
    <Box display='flex' alignItems='center' mt='20px'>
    <Stack pr='10px' fontSize='20px'>
       <IoExitOutline/>
       </Stack>
       <Stack>
        <Text to='/dashboard/refer' as={RLink}>Refer&Reward</Text>
        </Stack>
    </Box>
    <Box display='flex' alignItems='center' mt='20px'>
       <Stack pr='10px' fontSize='20px'>
       <IoExitOutline/>
       </Stack>
           <Stack>
           <Text to='/dashboard/logout' as={RLink}>LogOut</Text>
           </Stack>
    </Box>
    </Flex>
   </Box>
  </GridItem>
  <GridItem colSpan={9} rowSpan={9} bg='white' >
 <DashRoute/>
  </GridItem>
</Grid>
  
</BrowserRouter>
    )
}