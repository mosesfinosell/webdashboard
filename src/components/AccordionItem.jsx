import styled from "styled-components"
import {AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from "@chakra-ui/react"

const index = ({faq}) => {
    const {title, content} = faq
  return (
        <AccordionItem
            _expanded={{bg:"red"}}
            
        >
    {({isExpanded}) =>(
        <BG expanded={isExpanded}>
            <AccordionButton 
                _focus={{boxShadow:"none"}} 
                px={{base:"17px", md:"38px"}} 
                py="37px"
                display="flex" 
                justifyContent="space-between"
            >
                <Title>{title}</Title>
                <AccordionIcon w={{base:"24px", md:"28px"}} h={{base:"24px", md:"28px"}} color="#273B4A" />
            </AccordionButton>
            <AccordionPanel
                px={{base:"17px", md:"38px"}} 
                py="37px"
            >
                <Answer>
                {content}
                </Answer>
            </AccordionPanel>
        </BG>
    )}
    </AccordionItem>
  )
}

export default index

const Title = styled.h3`
    color: #273B4A;
    font-size: ${0.063 * 16}rem;
    line-height: ${0.063 * 21}rem;
    font-weight: 700;
    text-align: left;
    @media only screen and (min-width: 768px){
        font-size: ${0.063 * 25}rem;
        line-height: ${0.063 * 33}rem;
    }
`
const BG = styled.div`
    background: ${props=>props.expanded ? "#F5F5F5" : "none"};
    /* padding: ${38 * 0.063}rem */
`
const Answer = styled.p`
    color: #8C8C8C;
    font-size: ${0.063 * 14}rem;
    font-weight: 500;
    line-height: ${18 * 0.063}rem;

    @media only screen and (min-width: 768px){
        font-size: ${0.063 * 18}rem;
        line-height: ${23 * 0.063}rem;
    }
`