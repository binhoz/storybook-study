import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
export const CustomComponent: StoryObj = {
  args: {
    asChild: true,
    children: (
      <p>Custom text with &lt;p&gt;&lt;/p&gt; tag</p>
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