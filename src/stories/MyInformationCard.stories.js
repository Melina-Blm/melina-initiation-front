 
import MyInformationCard from '@/components/MyInformationCard.vue'


export default {
  title: 'Components/MyInformationCard',
  component: MyInformationCard,
  argTypes: {
    description : {
      control : 'text',
    },
    title : {
      control : 'text',
    },
    name : {
      control : "select",
      options : ['camion','fork knife', 'fork spoon']
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


export const Card = {
  render: (args) => {
    return {
      components: {
        MyInformationCard,
      },
      setup(){
        return { args}
      },
      template: `<MyInformationCard v-bind="args"/>`
    }
  },
  args: {
    description :'But I must explain to you how all this mistaken idea of denouncing pleasure and prasising pain was bron.',
    title : 'Qualityfull Food',
    name: 'fork spoon',
    color: 'light orange',
    stroke:'orange',
    size:'big',

  }
}


