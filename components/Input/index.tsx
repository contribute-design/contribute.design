import React from 'react'
import { Input as BaseInput, InputProps as BaseInputProps } from 'baseui/input'

export interface InputProps extends BaseInputProps {
  'data-testid'?: string
}

const Input: React.FC<InputProps> = ({ 'data-testid': e2eId, ...rest }) => {
  return (
    <BaseInput
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
              transitionProperty: 'border, background',
            }
          },
        },
      }}
      {...rest}
    />
  )
}

export default Input
