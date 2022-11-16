import React from 'react'
import { Button, ButtonProps as BaseButtonProps } from 'baseui/button'

type BaseProps = Omit<BaseButtonProps, 'type'> &
  React.HTMLAttributes<HTMLButtonElement>

export interface ButtonProps extends BaseProps {
  // This should probably be 'kind' so we don't have to do the Omit above
  type?: 'primary' | 'secondary' | 'tertiary'
  text?: string
  name?: string
  'data-testid'?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({
  shape = 'default',
  type = 'primary',
  'data-testid': e2eId,
  children,
  text,
  ...rest
}) => {
  return (
    <Button
      shape={shape}
      kind={type}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            const overrides = {
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              fontWeight: 400,
            }
            if (type === 'secondary') {
              return {
                ...overrides,
                borderLeftWidth: '1px',
                borderRightWidth: '1px',
                borderTopWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftStyle: 'solid',
                borderRightStyle: 'solid',
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid',
                borderLeftColor: $theme.colors.borderOpaque,
                borderRightColor: $theme.colors.borderOpaque,
                borderTopColor: $theme.colors.borderOpaque,
                borderBottomColor: $theme.colors.borderOpaque,
              }
            } else {
              return {
                ...overrides,
                borderLeftStyle: 'none',
                borderRightStyle: 'none',
                borderTopStyle: 'none',
                borderBottomStyle: 'none',
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
    </Button>
  )
}

export default ButtonComponent
