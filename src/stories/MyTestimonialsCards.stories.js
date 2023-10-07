 
import MyTestimonialsCards from '@/components/MyTestimonialsCards.vue'

export default {
  title: 'Components/MyTestimonialsCars',
  component: MyTestimonialsCards,
}

export const Cards = {
  render: (args) => {
    return {
      components: {
        MyTestimonialsCards,
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
    subtitle:'',


  }
}