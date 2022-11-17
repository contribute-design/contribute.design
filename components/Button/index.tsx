import React from 'react'
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from 'baseui/button'

type BaseProps = Omit<BaseButtonProps, 'type'> &
  React.HTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends BaseProps {
  // This should probably be 'kind' so we don't have to do the Omit above
  type?: 'primary' | 'secondary' | 'tertiary'
  text?: string
  name?: string
  'data-testid'?: string
}

const Button: React.FC<ButtonProps> = ({
  shape = 'default',
  type = 'primary',
  'data-testid': e2eId,
  children,
  text,
  ...rest
}) => {
  return (
    <BaseButton
      shape={shape}
      kind={type}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            const overrides = {
              display: 'inline !important',
              paddingTop: '12px',
              paddingBottom: '12px',
              paddingLeft: '12px',
              paddingRight: '12px',
              borderLeftWidth: '1px',
              borderRightWidth: '1px',
              borderTopWidth: '1px',
              borderBottomWidth: '1px',
              borderLeftStyle: 'solid',
              borderRightStyle: 'solid',
              borderTopStyle: 'solid',
              borderBottomStyle: 'solid',
            }
            if (type === 'secondary') {
              return {
                ...overrides,
                borderLeftColor: $theme.colors.borderOpaque,
                borderRightColor: $theme.colors.borderOpaque,
                borderTopColor: $theme.colors.borderOpaque,
                borderBottomColor: $theme.colors.borderOpaque,
                ':hover': {
                  color: '#fff',
                  borderLeftColor: $theme.colors.accent,
                  borderRightColor: $theme.colors.accent,
                  borderTopColor: $theme.colors.accent,
                  borderBottomColor: $theme.colors.accent,
                },
              }
            } else {
              return {
                ...overrides,
                borderLeftColor: $theme.colors.accent,
                borderRightColor: $theme.colors.accent,
                borderTopColor: $theme.colors.accent,
                borderBottomColor: $theme.colors.accent,
              }
            }
          },
          props: {
            'data-testid': e2eId,
          },
        },
      }}
      {...rest}
    >
      {text || children}
    </BaseButton>
  )
}

export default Button
