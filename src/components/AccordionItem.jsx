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
                py={{base:"15px", md:"27px"}}
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
                <Answer dangerouslySetInnerHTML={{__html:content}}>
                
                </Answer>
            </AccordionPanel>
        </BG>
    )}
    </AccordionItem>
  )
}

export default index

const Title = styled.h3`
  color: #273b4a;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 700;
  text-align: left;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.6rem;
  }
`;
const BG = styled.div`
  background: ${(props) => (props.expanded ? "#F5F5F5" : "none")};
  /* padding: ${38 * 0.063}rem */
`;
const Answer = styled.p`
  color: #8c8c8c;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;

  a {
    color: #d6aa1b;
  }
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
`;