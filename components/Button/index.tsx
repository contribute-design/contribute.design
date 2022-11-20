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
  $as?: string
  name?: string
  'data-testid'?: string
}

const Button: React.FC<ButtonProps> = ({
  shape = 'default',
  type = 'primary',
  'data-testid': e2eId,
  children,
  $as,
  text,
  ...rest
}) => {
  return (
    <BaseButton
      shape={shape}
      kind={type}
      // @ts-ignore */}
      $as={$as}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => {
            const overrides = {
              // display: 'inline !important',
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
              transitionProperty: 'color, border, background',
              transitionDuration: '200ms',
              transitionTimingFunction: $theme.animation.easeInOutCurve,
            }
            if (type === 'secondary') {
              return {
                ...overrides,
                borderLeftColor: $theme.colors.contentTertiary,
                borderRightColor: $theme.colors.contentTertiary,
                borderTopColor: $theme.colors.contentTertiary,
                borderBottomColor: $theme.colors.contentTertiary,
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
