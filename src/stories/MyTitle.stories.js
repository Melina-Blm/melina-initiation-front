import MyTitle from '@/components/elements/MyTitle.vue'

export default {
  title: 'Elements/MyTitle',
  component: MyTitle,
  argTypes: {
    el : {
      control : "select",
      options : ['h1', 'h2', 'h3', 'h4','h5','p']
    },
    size : {
      control : "select",
      options : ['default', 'small','regular','medium', 'big','bigger','giant']
    },
    weight : {
      control : "select",
      options : ['bold', 'light']
    },
    color : {
      control : "select",
      options : ['orange', 'default','gray','white']
    },
  }
}

export const Title = {
  render: (args) => {
    return {
      components: {
        MyTitle,
      },
      setup(){
        return { args }
      },
      template: `<MyTitle v-bind="args" >Mon titre</MyTitle>`
    }
  },
  args: {
    size: 'default',
    color:'default'
  }
}
