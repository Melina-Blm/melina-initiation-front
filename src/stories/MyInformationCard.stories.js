 
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
    description :'Test',
    title : 'Pizza',

  }
}


