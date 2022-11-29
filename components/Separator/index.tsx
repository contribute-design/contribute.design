import * as React from 'react'
import { useStyletron } from 'baseui'

export interface SeparatorProps {
  'data-testid'?: string
}

const Separator: React.FC<SeparatorProps> = ({ }) => {
  const [css, theme] = useStyletron()
  return (
    <hr
      className={css({
        color: 'rgba(255,255,255,0.2)',
        
      })}
    />
  )
}

export default Separator
