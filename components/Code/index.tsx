import * as React from 'react'
import { useStyletron } from 'baseui'

export interface CodeProps {
  children?: React.ReactNode
  color?: string
  'data-testid'?: string
}

const Code: React.FC<CodeProps> = ({ children, color }) => {
  const [css, theme] = useStyletron()
  return (
    <code
      className={css({
        color: color ? color : theme.colors.contentPrimary,
        fontSize: '13px',
        wordBreak: 'break-all',
        // borderWidth: '1px',
        // borderColor: theme.colors.borderOpaque,
        backgroundColor: theme.colors.backgroundSecondary,
        padding: '12px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px',
      })}
    >
      {children}
    </code>
  )
}

export default Code
