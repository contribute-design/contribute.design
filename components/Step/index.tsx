import * as React from 'react'
import { useStyletron } from 'baseui'
import Title from '../Title'

export interface StepProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const Step: React.FC<StepProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <span
      className={css({
        borderRadius: '12px',
        borderTopRadius: '12px',
        borderRightRadius: '12px',
        borderBottomRadius: '12px',
        borderLeftRadius: '12px',
        borderTopWidth: '1px',
        borderRightWidth: '1px',
        borderBottomWidth: '1px',
        borderLeftWidth: '1px',
        padding: '12px 20px 12px 20px',
        backgroundColor: '#88133750',
        borderColor: theme.colors.accent,
        color: theme.colors.primary,
      })}
    >
      {children}
    </span>
  )
}

export default Step
