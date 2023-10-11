 
import MyContactCards from '@/components/MyContactCards.vue'

export default {
  title: 'Components/MyContactCards',
  component: MyContactCards,
}

export const ContactCards = {
  render: (args) => {
    return {
      components: {
        MyContactCards,
      },
      setup(){
        return { args}
      },
      template: `<MyContactCards v-bind="args"/>`
    }
  },
  args: {
    description :'But I must explain to you how all this mistaken idea of denouncing pleasure and prasising pain was bron.',
    title : 'Qualityfull Food',
    name: 'phone',
    color: 'light orange',
    stroke:'orange',
    size:'big',

  
  }
}


