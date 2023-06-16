import { Box, FlexProps } from "@chakra-ui/react"
import LoadingOverlay from "@elements/LoadingOverlay"
import CustomHeader from "../CustomHeader"
import AnchorMenuNav from "../AnchorMenuNav"

import { useEffect } from "react"

const MainLayout = ({children, ...rest}: FlexProps) => {
    return (
        <Box
            bgGradient='linear(to-b, cyan.50, blue.600)'
            pb={10}
            minHeight='100vh'
            px={{base:'1rem', sm:'2rem', md:'4rem'}}
            {...rest}>

            {/* {do soething && <LoadingOverlay/>} */}
            <CustomHeader />
            <AnchorMenuNav/>

            {children}

            {/* later */}
            <footer />
        </Box>
    )
}

export default MainLayout