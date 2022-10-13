import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Heading Title',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'radio'
      } 
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}
export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: (
      <h1>Heading H1</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}