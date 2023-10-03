 
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
    description :'Description de la card',
    title : 'Titre de la card',
    imageSrc : 'http://placekitten.com/300/150',
    imageAlt : 'Image de chat',
    buttonLabel : 'Bouton de la card',

  }
}