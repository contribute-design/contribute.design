import React from 'react'
import {
  ButtonGroup as BaseButtonGroup,
  ButtonGroupProps as BaseButtonGroupProps,
} from 'baseui/button-group'

export interface ButtonGroupProps extends BaseButtonGroupProps {
  'data-testid'?: string
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  'data-testid': e2eId,
  ...rest
}) => {
  return <BaseButtonGroup {...rest} />
}

export default ButtonGroup
