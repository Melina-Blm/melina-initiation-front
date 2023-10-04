 
import MyCard from '@/components/MyCard.vue'

export default {
  title: 'Components/MyCard',
  component: MyCard,
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
    buttonLabel : {
      control : 'text',
    },
    price : {
      control : 'text',
    },
    rating : {
      control : 'text',
    }}
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard,
      },
      setup(){
        return { args}
      },
      template: `<MyCard v-bind="args"/>`
    }
  },
  args: {
    description :'',
    title : 'Pizza',
    imageSrc : 'src/assets/pizza-pepperoni.jpg',
    imageAlt : 'Image de pizza',
    buttonLabel : 'Add To Cart',
    price:'18.50',
    rating:'5.0',

  }
}