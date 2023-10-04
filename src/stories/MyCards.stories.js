 
import MyCards from '@/components/MyCards.vue'

export default {
  title: 'Components/MyCards',
  component: MyCards,
}

export const Cards = {
  render: (args) => {
    return {
      components: {
        MyCards,
      },
      setup(){
        return { args}
      },
      template: `<MyCards v-bind="args"/>`
    }
  },
  args: {
    description :'',
    title : '',
    imageSrc : '',
    imageAlt : '',
    buttonLabel : '',


  }
}