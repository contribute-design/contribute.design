import React from 'react'
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
  Value as BaseValue,
} from 'baseui/select'

export interface SelectProps extends BaseSelectProps {
  'data-testid'?: string
}

export declare type Value = BaseValue

export const Select: React.FC<SelectProps> = ({
  'data-testid': e2eId,
  ...rest
}) => {
  return (
    <BaseSelect
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
              transitionProperty: 'border, background',
              width: '200px',
            }
          },
        },
        Dropdown: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.backgroundTertiary,
          }),
        },
        DropdownContainer: {
          style: ({ $theme }) => ({
            // outline: `${$theme.colors.warning600} solid`,
            // backgroundColor: $theme.colors.warning600,
          }),
        },
        DropdownListItem: {
          style: ({ $theme }) => ({
            color: $theme.colors.contentSecondary,
            ':hover': {
              backgroundColor: $theme.colors.backgroundSecondary,
              color: $theme.colors.contentPrimary,
            },
            // outline: `${$theme.colors.warning600} solid`,
            // backgroundColor: $theme.colors.warning600,
          }),
        },
        IconsContainer: {
          style: ({ $theme }) => ({
            // outline: `${$theme.colors.warning600} solid`,
            opacity: 0.2,
          }),
        },
        DropdownOption: {
          style: ({ $theme }) => ({
            // outline: `${$theme.colors.warning600} solid`,
            // backgroundColor: $theme.colors.warning600,
          }),
        },
      }}
      {...rest}
    />
  )
}
