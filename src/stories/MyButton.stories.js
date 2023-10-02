import MyButton from '@/components/elements/MyButton.vue'

export default {
    title: 'Elements/MyButton',
    component: MyButton,
    argTypes: {
      href : {
        control: "text"
      },
      size: {
        control: "select",
        options: ['regular', 'small']
      },
      variant: {
        control: "select",
        options: ['default', 'rounded']
      }
    }
  }
  
  export const PrimaryButton = {
    render: (args) => {
      return {
        components: {
          MyButton,
        },
        setup(){
          return {args}
        },
        template: `<MyButton v-bind="args">My link Button</MyButton>`
      }
    },
    args: {
      size: "regular",
      variant: "default"
    }
  }
  

  export const RoundedPrimaryButton = {
    render: (args) => {
      return {
        components: {
          MyButton,
        },
        setup(){
          return {args}
        },
        template: `<MyButton v-bind="args">My link Button</MyButton>`
      }
    },
    args: {
      size: "regular",
      variant: "rounded"
    }
  }

  export const SecondaryButton = {
    render: (args) => {
      return {
        components: {
          MyButton,
        },
        setup(){
          return {args}
        },
        template: `<MyButton v-bind="args">My link Button</MyButton>`
      }
    },
    args: {
      size: "small",
      variant: "default"
    }
  }


  export const RoundedSecondaryButton = {
    render: (args) => {
      return {
        components: {
          MyButton,
        },
        setup(){
          return {args}
        },
        template: `<MyButton v-bind="args">My link Button</MyButton>`
      }
    },
    args: {
      size: "small",
      variant: "rounded"
    }
  }