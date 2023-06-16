import { Fade, Flex, Spinner } from "@chakra-ui/react"

const LoadingOverlay = (isLoading:boolean|any) => {
    return (
        <Fade in={isLoading}>
            <Flex
                position='fixed' zIndex={5}
                top={0} left={0} right={0} bottom={0}
                bgColor='blackAlpha.700'
                justifyContent='center'
                alignItems='center'
                >
                <Spinner
                    thickness='0.75rem'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.200'
                    w='5rem' h='5rem'
                />
            </Flex>
        </Fade>
    )
}

export default LoadingOverlay