import React from 'react'
import { motion } from 'framer-motion'
import { Card as BaseCard, StyledBody, StyledAction } from 'baseui/card'

export interface CardProps {
  body?: React.ReactNode
  title?: React.ReactNode
  action?: React.ReactNode
  headerImage?: string
  onClick?: () => void
  padded?: boolean
  margin?: boolean
  hover?: boolean
  hoverBackground?: boolean
  background?: string
  titleColor?: string
  fullHeight?: boolean
  shadow?: boolean
  asForm?: boolean
  children?: React.ReactNode
  before?: React.ReactNode // This let's you inject components BEFORE the the actual card wrapper
}

/**
 * Use `Card` to group related content inside a specific block.
 *
 * We use Cards either in a grid-matrix or to hightlight specific areas across a content page.
 * Some examples can be found in the specific sections on the left.
 */
const Card: React.FC<CardProps> = ({
  body,
  title,
  action,
  headerImage,
  children,
  onClick,
  padded = true,
  margin = true,
  hover = false,
  hoverBackground = false,
  background = 'transparent',
  titleColor = 'inherit',
  fullHeight = false,
  shadow = true,
  asForm = false,
  before,
  ...rest
}) => {
  const content = (
    <>
      {body || (children && <StyledBody>{body || children}</StyledBody>)}
      <StyledAction>{action}</StyledAction>
    </>
  )
  return (
    <motion.div
      style={{ height: fullHeight ? 'fit-content' : undefined }}
      whileHover={{ scale: hover ? 1.05 : 1 }}
    >
      {before}
      <BaseCard
        title={title}
        overrides={{
          Root: {
            style: ({ $theme }) => {
              return {
                transitionProperty: 'border, background',
                transitionDuration: '200ms',
                transitionTimingFunction: $theme.animation.easeOutQuinticCurve,
                borderTopRadius: '12px',
                borderRightRadius: '12px',
                borderBottomRadius: '12px',
                borderLeftRadius: '12px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderLeftWidth: '1px',
                height: fullHeight ? '100%' : undefined,
                // backgroundColor: $theme.colors.backgroundPrimary,
                // backgroundImage:
                //   'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
                ':hover': {
                  backgroundColor: hover ? `${$theme.colors.backgroundTertiary}70` : undefined,
                  // backgroundImage:
                  // 'linear-gradient(rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
                  // borderColor: $theme.colors.primary,
                  borderColor: `${$theme.colors.contentTertiary}40`,
                },
                padding: padded && !headerImage ? '8px' : undefined,
              }
            },
          },
          HeaderImage: {
            style: () => {
              return {
                width: '100%',
              }
            },
          },
          Title: {
            style: () => {
              return {
                color: titleColor,
              }
            },
          },
          Contents: {
            style: ({ $theme }) => {
              return {
                marginLeft: padded ? $theme.sizing.scale600 : '0px',
                marginTop: padded ? $theme.sizing.scale600 : '0px',
                marginBottom: padded ? $theme.sizing.scale600 : '0px',
                marginRight: padded ? $theme.sizing.scale600 : '0px',
              }
            },
          },
          Body: {
            style: ({ $theme }) => {
              return {
                marginBottom: padded ? $theme.sizing.scale600 : '0px',
              }
            },
          },
        }}
        headerImage={headerImage}
        {...rest}
      >
        {asForm ? <form>{content}</form> : content}
      </BaseCard>
    </motion.div>
  )
}

export default Card
