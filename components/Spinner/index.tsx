import React from 'react'
import {
  Spinner as BaseSpinner,
  SpinnerProps as BaseSpinnerProps,
} from 'baseui/spinner'
import { useStyletron } from 'baseui'

export interface SpinnerProps extends BaseSpinnerProps {
  'data-testid'?: string
}

const Spinner: React.FC<SpinnerProps> = ({ 'data-testid': e2eId, ...rest }) => {
  const [css, theme] = useStyletron()
  return <BaseSpinner $color={theme.colors.accent} {...rest} />
}

export default Spinner
