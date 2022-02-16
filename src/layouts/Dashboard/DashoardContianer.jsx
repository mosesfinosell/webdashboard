import {Grid, GridItem,Box,Center,Text, Image, Flex,Stack,Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import HomeDash from "../Dashboard/DashboardItems/HomeDashboard";
import DealDashboard from "../Dashboard/DashboardItems/DealDashboard";
import VirtualCard from "../Dashboard/DashboardItems/VirtualCard";
import DA from '../HomeItemsModal/Deals/DealAvailable'
import DS from '../HomeItemsModal/Deals/DealSearchBox'
import user1 from '../../assets/user1.png'
import {FaAngleDown} from 'react-icons/fa'
import { RiHomeSmile2Line } from "react-icons/ri";
import {IoCardOutline,IoExitOutline} from "react-icons/io5"
import {BiUser,BiHelpCircle} from 'react-icons/bi'
import delicon from '../../assets/DealIcon.svg'
import reficon from '../../assets/reficon.svg'
import {useSelector} from 'react-redux'




export default function DashboardPage() {
    const personal = useSelector((state) => state.personal)
    const {users} = personal

    return(

     
     <Grid
     pl='25'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(12, 1fr)'
 display='flex'
>
<Tabs orientation='vertical' variant='unstyled'>
  <GridItem rowSpan={7} colSpan={2} bg='white'>
   <Box bg='white' w='250px' h='100%' border='0.5px solid #D9D9D9'>
  
        <Center p='45px'>
        <Flex display='flex' direction='row' alignItems='center'>
        <Image mr='15px' src={user1} alt='user'/>
        <Stack>
        {/* <Text>Hello {users[0variant='unstyled']}</Text> */}
        </Stack>
       <Stack>
       <FaAngleDown/>
       </Stack>
        </Flex>
        </Center>
  <TabList>
    <Tab fontSize='16px' color='black'>
    <Stack pr='10px' fontSize='20px'>
       <RiHomeSmile2Line />
        </Stack>
       Home
       </Tab>
    <Tab fontSize='16px'  color='black'>
    <Stack pr='10px'>
       <Image src={delicon} h='17px' />
        </Stack>
        Deal
    </Tab>
    <Tab fontSize='16px'  color='black'>
    <Stack pr='10px' fontSize='20px'>
         <IoCardOutline/>
         </Stack>
        Virtual Card
    </Tab>
    <Tab fontSize='16px'  color='black'>
    <Stack pr='10px' fontSize='20px'>
            <BiUser/>
        </Stack>
        Account
    </Tab>
    <Tab fontSize='16px'  color='black'>
    <Stack pr='10px' fontSize='20px'>
            <BiHelpCircle/>
        </Stack>
        Help
    </Tab>
    <Tab fontSize='16px'  color='black'>
    <Stack pr='10px'>
       <Image src={reficon} h='17px' />
        </Stack>
        Refer&Reward
    </Tab>
    <Tab fontSize='16px'  color='black'>
    <Stack pr='10px' fontSize='20px'>
       <IoExitOutline/>
       </Stack>
        LogOut
    </Tab>
  </TabList>
   </Box>
  </GridItem>
  <GridItem colSpan={9} rowSpan={9} bg='white' >
  <TabPanels>
  <TabPanel>
    <HomeDash/>
  </TabPanel>
  <TabPanel>
  <DealDashboard/>
  </TabPanel>
  <TabPanel>
  <VirtualCard/>
  </TabPanel>
  <TabPanel>
  <DA/>
  </TabPanel>
  <TabPanel>
  <DS/>
  </TabPanel>
  <TabPanel>
  <DealDashboard/>
  </TabPanel>
  <TabPanel>
  <DealDashboard/>
  </TabPanel>
  </TabPanels>
  </GridItem>
  </Tabs>
</Grid>
    )
}







