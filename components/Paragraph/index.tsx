import React from 'react'
import {
  ParagraphLarge,
  ParagraphMedium,
  ParagraphSmall,
  ParagraphXSmall,
} from 'baseui/typography'
import { BlockProps } from 'baseui/block'

type BaseProps = BlockProps & React.HTMLAttributes<HTMLParagraphElement>

interface ParagraphProps extends BaseProps {
  size?: 's' | 'm' | 'l' | 'xl'
  align?: 'left' | 'right' | 'center' | 'justify'
}

const Paragraph: React.FC<ParagraphProps> = ({
  size = 'l',
  align = 'left',
  children,
  ...props
}) => {
  let ParagraphComponent = ParagraphMedium
  switch (size) {
    case 's':
      ParagraphComponent = ParagraphXSmall
      break
    case 'm':
      ParagraphComponent = ParagraphSmall
      break
    case 'l':
      ParagraphComponent = ParagraphMedium
      break
    case 'xl':
      ParagraphComponent = ParagraphLarge
      break
    default:
      break
  }
  return (
    <ParagraphComponent
      {...props}
      overrides={{
        Block: {
          style: () => ({ textAlign: align !== 'left' ? align : undefined }),
        },
      }}
    >
      {children}
    </ParagraphComponent>
  )
}

export default Paragraph
