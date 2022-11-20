import React from 'react'
import {
  Textarea as BaseTextarea,
  TextareaProps as BaseTextareaProps,
} from 'baseui/textarea'

export interface TextareaProps extends BaseTextareaProps {
  'data-testid'?: string
}

const Textarea: React.FC<TextareaProps> = ({
  'data-testid': e2eId,
  ...rest
}) => {
  return <BaseTextarea {...rest} />
}

export default Textarea
