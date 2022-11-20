import * as React from 'react'
import { useStyletron } from 'baseui'

export interface HighlightProps {
    children?: React.ReactNode
    'data-testid'?: string
  }

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return <span className={css({color: theme.colors.accent})}>{children}</span>
}

export default Highlight
