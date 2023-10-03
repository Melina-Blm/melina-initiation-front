 
import MyIcon from '@/components/elements/MyIcon.vue'

export default {
  title: 'Elements/MyIcon',
  component: MyIcon,
  argTypes: {
    name : {
      control : "select",
      options : ['community', 'documentation', 'ecosystem', 'support', 'tooling','arrow right','arrow left','arrow right2']
    },
    variant: {
      control: "select",
      options: ['white','black','orange','light orange']
    },
    stroke: {
      control: "select",
      options: ['white','black','orange','light orange']
    },
    size: {
      control: "select",
      options: ['small','regular','big']
    }
  }
}

export const Icon = {
  render: (args) => {
    return {
      components: {
        MyIcon,
      },
      setup(){
        return { args}
      },
      template: `<MyIcon v-bind="args"/>`
    }
  },
  args: {
    name: 'community',
    variant: 'white',
    stroke:'black',
    size:'small',
  }
}