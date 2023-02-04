import { Box, Circle, Text } from "@chakra-ui/react"
import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import { nanoid } from "nanoid"
import Link from "next/link"
import { FiHeart, FiSunrise, FiSmile, FiSunset, FiMoreHorizontal, FiArchive, FiLogOut, FiDollarSign } from "react-icons/fi"

interface BlockFounderProps {
    id: string | number,
    active: boolean,
    quit: boolean,
    exit: boolean,
    makeMoney: string,
    companyName: string,
    description: string,
    startDate: string,
    endDate: string
}
export type BlockFounderType = {
    founded: BlockFounderProps[]
}

const BlockFounder = ({founded}: BlockFounderType) => {
    return (

        <PageSection>
            <BubbleContainer>
                <IconicTitle icon={FiHeart} hoverColor='pink.200'>Founder Journal</IconicTitle>
                {
                    founded.map((item:any) => {
                        return (
                            <Box key={nanoid()}
                            _notLast={{ borderBottom:'1px dashed gray', pb:4, mb:4 }} >
                                {
                                    item.url ?
                                        <Link href={item.url} about={item.urlCaption}>
                                            <Text fontSize={20} fontWeight={600}
                                                display= 'inline-block'
                                            >{item.companyName}</Text>
                                        </Link>
                                    :
                                        <Text fontSize={20} fontWeight={600}
                                            display= 'inline-block'
                                        >{item.companyName}</Text>
                                }
                                <Circle as={item.makeMoney == 'good'    ?   FiSunrise : 
                                            item.makeMoney == 'medium'  ?   FiSmile :
                                            item.makeMoney == 'bad'     ?   FiSunset :
                                                                            FiMoreHorizontal }
                                    borderStyle='solid'
                                    borderColor='gray.800'
                                    borderWidth='1px 2px 3px 1px'
                                    display='inline-block'
                                    size={6} p={0.5}
                                    position='relative' top={1} left={2}
                                    bg={item.makeMoney == 'good'    ?   { base: 'green.200',  md: 'white' } : 
                                        item.makeMoney == 'medium'  ?   { base: 'yellow.200', md: 'white' } :
                                        item.makeMoney == 'bad'     ?   { base: 'red.200',    md: 'white' } :
                                                                        { base: 'white',      md: 'white' } }
                                    transition='.4s ease all'
                                    _groupHover={item.makeMoney == 'good'   ?   { md: {bg : 'green.200'} } : 
                                                item.makeMoney == 'medium'  ?   { md: {bg : 'yellow.200'} } :
                                                item.makeMoney == 'bad'     ?   { md: {bg : 'red.200'} } :
                                                                                { md: {bg : 'white'} }}
                                />
                                {
                                    !item.active &&
                                    <Circle as={FiArchive} 
                                    borderStyle='solid'
                                    borderColor='gray.800'
                                    borderWidth='1px 2px 3px 1px'
                                    display='inline-block'
                                    size={6} p={0.5}
                                    position='relative' top={1} left={2} ml={1}
                                    bg={ { base: 'orange.200', md: 'white' } }
                                    transition='.4s ease all'
                                    _groupHover={ { md: {bg: 'orange.200'} } }
                                    />
                                }
                                {
                                    item.quit &&
                                    <Circle as={FiLogOut} 
                                    borderStyle='solid'
                                    borderColor='gray.800'
                                    borderWidth='1px 2px 3px 1px'
                                    display='inline-block'
                                    size={6} p={0.5}
                                    position='relative' top={1} left={2} ml={1}
                                    bg={ { base: 'orange.200', md: 'white' } }
                                    transition='.4s ease all'
                                    _groupHover={ { md: {bg: 'orange.200'} } }
                                    />
                                }
                                {
                                    item.exit &&
                                    <Circle as={FiDollarSign} 
                                    borderStyle='solid'
                                    borderColor='gray.800'
                                    borderWidth='1px 2px 3px 1px'
                                    display='inline-block'
                                    size={6} p={0.5}
                                    position='relative' top={1} left={2} ml={1}
                                    bg={ { base: 'yellow.300', md: 'white' } }
                                    transition='.4s ease all'
                                    _groupHover={ { md: {bg: 'yellow.300'} } }
                                    />
                                }
                                <Text fontSize={12} fontWeight={600} color='gray.500' mb={2}>
                                    {item.startDate} {item.endDate ? `- ${item.endDate}` : '- now'}
                                </Text>
                                <Text>{item.description}</Text>
                            </Box>
                        )
                    })
                }
            </BubbleContainer>
        </PageSection>
    )
}

export default BlockFounder