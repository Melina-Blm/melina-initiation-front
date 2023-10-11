 
import MyHeroCard from '@/components/MyHeroCard.vue'

export default {
  title: 'Components/MyHeroCard',
  component: MyHeroCard,
  argTypes: {
    description : {
      control : 'text',
    },
    title : {
      control : 'text',
    },
    imageSrc : {
      control : 'text',
    },
    imageAlt : {
      control : 'text',
    },
    price : {
      control : 'text',
    },
}
}

export const HeroCard = {
  render: (args) => {
    return {
      components: {
        MyHeroCard,
      },
      setup(){
        return { args}
      },
      template: `<MyHeroCard v-bind="args"/>`
    }
  },
  args: {
    description :'Mushroom Sauce',
    title : 'Burger',
    imageSrc : 'src/assets/burger_sandwich.png',
    imageAlt : 'Burger',
    price:'5.15',

  }
}