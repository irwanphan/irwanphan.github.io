import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'

import fs from 'fs/promises'
import path from "path"

import AnchorMenuNav from '@layouts//AnchorMenuNav'
import CustomHeader from '@layouts//CustomHeader'
import BlockHeader from '@libs/components/BlockHeader'
import BlockStudies from '@libs/components/BlockStudies'
import BlockJourney from '@libs/components/BlockJourney'
import BlockFounder from '@libs/components/BlockFounder'
import BlockSkillset from '@libs/components/BlockSkillset'

const Home: NextPage = ({ journey, skillset }: any) => {
  const [ studies, setStudies ] = useState(journey.studies)
  const [ works, setWorks ] = useState(journey.works)
  const [ founded, setFounded ] = useState(journey.founded)
  const [ skills, setSkills ] = useState(skillset)

  return (
    <Box
      bgGradient='linear(to-b, cyan.50, blue.600)'
      pb={10}
    >
      <CustomHeader />

      <AnchorMenuNav/>
      <BlockHeader />

      <BlockStudies studies={studies} />
      <BlockSkillset skills={skills} />
      <BlockJourney works={works} />
      <BlockFounder founded={founded} />
      
    </Box>
  )
}

export async function getStaticProps() {
  // first json data
  const filePathJourney = path.join(process.cwd(), 'libs', 'data', 'journey.json')
  const jsonDataJourney:any = await fs.readFile(filePathJourney)
  const dataJourney = JSON.parse(jsonDataJourney)
  // second json data
  const filePathSkillset = path.join(process.cwd(), 'libs', 'data', 'skillset.json')
  const jsonDataSkillset:any = await fs.readFile(filePathSkillset)
  const dataSkillset = JSON.parse(jsonDataSkillset)
  return {
    props: {
      journey: dataJourney,
      skillset: dataSkillset
    }
  }
}

export default Home