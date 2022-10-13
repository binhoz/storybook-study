import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Text size="sm" asChild><label className="flex items-center gap-2 cursor-pointer">{Story()} Text label for checkbox</label></Text>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}