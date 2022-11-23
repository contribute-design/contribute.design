import * as React from 'react'
import { useStyletron } from 'baseui'

export interface HighlightProps {
  children?: React.ReactNode
  'data-testid'?: string
}

const Highlight: React.FC<HighlightProps> = ({ children }) => {
  const [css, theme] = useStyletron()
  return (
    <span
      className={css({
        color: theme.colors.accent,
        // color: 'unset',
        // backgroundImage:
        //   'linear-gradient(to right bottom, rgb(225, 29, 72) 30%, rgba(185, 12, 50, 1))',
        // '-webkit-background-clip': 'text',
        // '-webkit-text-fill-color': 'transparent',
      })}
    >
      {children}
    </span>
  )
}

export default Highlight
