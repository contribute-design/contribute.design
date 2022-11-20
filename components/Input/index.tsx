import React from 'react'
import { Input as BaseInput, InputProps as BaseInputProps } from 'baseui/input'

export interface InputProps extends BaseInputProps {
  'data-testid'?: string
}

const Input: React.FC<InputProps> = ({ 'data-testid': e2eId, ...rest }) => {
  return <BaseInput {...rest} />
}

export default Input
