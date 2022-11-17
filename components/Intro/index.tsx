import React from 'react'
import Image from 'next/image'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

const Intro: React.FC = () => {
  return (
    <FlexGrid
      flexGridColumnCount={1}
      flexGridColumnGap="scale800"
      flexGridRowGap="scale800"
    >
      <FlexGridItem justifyContent="center" display="flex">
        <Image
          src="/contribute.design.svg"
          alt="contribute.design"
          width={387}
          height={59}
        />
      </FlexGridItem>
    </FlexGrid>
  )
}

export default Intro
