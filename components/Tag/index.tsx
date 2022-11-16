import React from 'react'
import { Tag as BaseTag, TagProps as BaseTagProps } from 'baseui/tag'

export interface TagProps extends BaseTagProps {
  text?: string
  maxWidth?: string
  'data-testid'?: string
}

const Tag: React.FC<TagProps> = ({
  text,
  closeable = false,
  variant = 'light',
  kind = 'neutral',
  children = null,
  onClick = undefined,
  'data-testid': e2eId,
  maxWidth,
  size = 'default',
  ...rest
}) => {
  return (
    <BaseTag
      overrides={{
        Root: {
          // REMINDER: setting responsive layout causes warnings in console
          style: () => {
            return {
              borderTopRightRadius: '4px',
              borderBottomRightRadius: '4px',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
              cursor: onClick ? 'pointer' : 'inherit',
              paddingTop: size === 'big' ? '24px' : '8px',
              paddingBottom: size === 'big' ? '24px' : '8px',
              maxWidth,
            }
          },
          props: {
            'data-testid': e2eId,
          },
        },
        Text: {
          style: () => {
            return {
              maxWidth: maxWidth ? maxWidth : '150px',
              fontSize: size === 'big' ? '18px' : 'inherit',
              paddingTop: size === 'big' ? '32px' : '8px',
              paddingBottom: size === 'big' ? '32px' : '10px',
            }
          },
        },
      }}
      color="red"
      closeable={closeable}
      variant={variant}
      kind={kind}
      onClick={onClick}
      onActionClick={onClick}
      {...rest}
    >
      {text || children}
    </BaseTag>
  )
}

export default Tag
