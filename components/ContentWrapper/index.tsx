import React from 'react'
import Image from 'next/image'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'

export interface ContentWrapperProps {
  children?: React.ReactNode
  maxWidth?: string
  'data-testid'?: string
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  maxWidth = '1480px',
  children,
}) => {
  return (
    <FlexGrid flexGridColumnCount={1}>
      <FlexGridItem justifyContent="center" display="flex">
        <FlexGrid
          flexGridColumnCount={1}
          maxWidth={maxWidth}
          paddingLeft={['10px', '20px', '6vw']}
          paddingRight={['10px', '20px', '6vw']}
        >
          <FlexGridItem
            justifyContent="center"
            display="flex"
            flexDirection="column"
          >
            {children}
          </FlexGridItem>
        </FlexGrid>
      </FlexGridItem>
    </FlexGrid>
  )
}

export default ContentWrapper
