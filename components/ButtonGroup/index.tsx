import React from 'react'
import { Block, BlockProps } from 'baseui/block'

export interface ButtonGroupProps extends BlockProps {
  'data-testid'?: string
  children?: any
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  'data-testid': e2eId,
  children,
  ...rest
}) => {
  return (
    <Block display="flex" flexDirection="row" flexWrap gridGap="12px" {...rest}>
      {children}
    </Block>
  )
}

export default ButtonGroup
