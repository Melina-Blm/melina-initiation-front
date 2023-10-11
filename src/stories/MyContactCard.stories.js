 
import MyContactCard from '@/components/MyContactCard.vue'


export default {
  title: 'Components/MyContactCard',
  component: MyContactCard,
  argTypes: {
    description : {
      control : 'text',
    },
    title : {
      control : 'text',
    },
    name : {
      control : "select",
      options : ['phone','map','clock']
    },
    color: {
      control: "select",
      options: ['nobg','white','black','orange','light orange',]
    },
    stroke: {
      control: "select",
      options: ['white','black','orange','light orange']
    },
    size: {
      control: "select",
      options: ['small','regular','big']
    },


  }}


export const ContactCard = {
  render: (args) => {
    return {
      components: {
        MyContactCard,
      },
      setup(){
        return { args}
      },
      template: `<MyContactCard v-bind="args"/>`
    }
  },
  args: {
    description :'Working time',
    title : 'Today 10:00am - 10:00pm',
    name: 'clock',
    color: 'orange',
    stroke:'white',
    size:'small',

  }
}


