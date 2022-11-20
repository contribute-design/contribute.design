import React from 'react'
import {
  FlexGrid,
  FlexGridItem,
  FlexGridProps,
  FlexGridItemProps,
} from 'baseui/flex-grid'

export interface GridProps extends FlexGridProps {
  'data-testid'?: string
}
export interface GridItemProps extends FlexGridItemProps {
  'data-testid'?: string
}

export const Grid: React.FC<GridProps> = ({
  children,
  flexDirection = 'column',
  justifyContent = 'center',
  flexGridColumnGap = 'scale800',
  flexGridRowGap = 'scale800',
  flexGridColumnCount = 1,
  ...rest
}) => {
  return (
    <FlexGrid
      flexGridColumnCount={flexGridColumnCount}
      flexGridColumnGap={flexGridColumnGap}
      flexGridRowGap={flexGridRowGap}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      {...rest}
    >
      {children}
    </FlexGrid>
  )
}

export const GridItem: React.FC<GridItemProps> = ({
  children,
  flexDirection = 'column',
  justifyContent = 'center',
  gridGap = '40px',
  ...rest
}) => {
  return (
    <FlexGridItem
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      gridGap={gridGap}
      display="flex"
      flexWrap
      {...rest}
    >
      {children}
    </FlexGridItem>
  )
}
