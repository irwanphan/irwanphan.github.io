import BubbleContainer from "@elements/BubbleContainer"
import IconicTitle from "@elements/IconicTitle"
import PageSection from "@elements/Section"
import MainLayout from "@layouts/MainLayout"
import { FiMapPin } from "react-icons/fi"


const PlaygroundPage = () => {
    return (
        <MainLayout>
            <PageSection>
                <BubbleContainer>
                    <IconicTitle icon={FiMapPin} hoverColor='yellow.300'>Sight-C-Map</IconicTitle>

                </BubbleContainer>

            </PageSection>
        </MainLayout>
    )
}

export default PlaygroundPage