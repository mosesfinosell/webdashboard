import { Text,Grid,Box,GridItem } from "@chakra-ui/react";

export default function VirtualCard() {
    return(
         
        <Grid
  h='800px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem colSpan={4} rowSpan={6} bg='tomato'>
  </GridItem>
  </Grid>
    )
}