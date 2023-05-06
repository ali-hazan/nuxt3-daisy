import Button from '../components/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
  },
}
