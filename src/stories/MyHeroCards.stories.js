 
import MyHeroCards from '@/components/MyHeroCards.vue'

export default {
  title: 'Components/MyHeroCards',
  component: MyHeroCards,
}

export const HeroCards = {
  render: (args) => {
    return {
      components: {
        MyHeroCards,
      },
      setup(){
        return { args}
      },
      template: `<MyHeroCards v-bind="args"/>`
    }
  },
  args: {
    description :'Mushroom Sauce',
    title : 'Burger',
    imageSrc : 'src/assets/burger_sandwich.png',
    imageAlt : 'Image de burger',
    price:'5.15'


  }
}