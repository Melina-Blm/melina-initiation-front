 
import MyInformationsCards from '@/components/MyInformationsCards.vue'

export default {
  title: 'Components/MyInformationsCards',
  component: MyInformationsCards,
}

export const InformationsCards = {
  render: (args) => {
    return {
      components: {
        MyInformationsCards,
      },
      setup(){
        return { args}
      },
      template: `<MyInformationsCards v-bind="args"/>`
    }
  },
  args: {
    description :'But I must explain to you how all this mistaken idea of denouncing pleasure and prasising pain was bron.',
    title : 'Qualityfull Food',
    name: 'fork spoon',
    color: 'light orange',
    stroke:'orange',
    size:'big',
    border: 'with border',
  
  }
}


