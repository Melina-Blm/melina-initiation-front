 
import MyTestimonialsCard from '@/components/MyTestimonialsCard.vue'


export default {
  title: 'Components/MyTestimonialsCard',
  component: MyTestimonialsCard,
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
    subtitle : {
      control : 'text',
    }
 

  }}


export const Card = {
  render: (args) => {
    return {
      components: {
        MyTestimonialsCard,
      },
      setup(){
        return { args}
      },
      template: `<MyTestimonialsCard v-bind="args"/>`
    }
  },
  args: {
    description :'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus.”',
    title : 'Williams Jhone',
    imageSrc : 'src/assets/icon-personne.png',
    imageAlt : 'Icone ceo',
    subtitle : 'CEO & Co-Founder',

  }
}


