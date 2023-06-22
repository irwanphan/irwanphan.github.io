import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import BubbleContainer from "@elements/BubbleContainer";
import IconicTitle from "@elements/IconicTitle";
import PageSection from "@elements/Section";
import MainLayout from "@layouts/MainLayout";
import { FiMapPin } from "react-icons/fi";

// Dynamically import MapRenderer component to be used on the client-side
const DynamicMapRenderer = dynamic(() => import("@components/MapRenderer"), { ssr: false });

const PlaygroundPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <MainLayout>
      <PageSection>
        <BubbleContainer>
          <IconicTitle icon={FiMapPin} hoverColor="yellow.300">
            Sight-C-Map
          </IconicTitle>
          {isClient && <DynamicMapRenderer />}
        </BubbleContainer>
      </PageSection>
    </MainLayout>
  );
};

export default PlaygroundPage;
