 
import SocialsIcons from '@/components/elements/SocialsIcons.vue'

export default {
  title: 'Elements/SocialsIcons',
  component: SocialsIcons,
  argTypes: {
    name : {
      control : "select",
      options : ['twitter', 'facebook', 'linkedin', 'instagram']
    }
  }
}

export const IconFacebook = {
  render: (args) => {
    return {
      components: {
        SocialsIcons,
      },
      setup(){
        return { args}
      },
      template: `<SocialsIcons v-bind="args"/>`
    }
  },
  args: {
    name: 'facebook',
  }
}

export const IconInstagram = {
  render: (args) => {
    return {
      components: {
        SocialsIcons,
      },
      setup(){
        return { args}
      },
      template: `<SocialsIcons v-bind="args"/>`
    }
  },
  args: {
    name: 'instagram',
  }
}

export const IconLinkedIn = {
  render: (args) => {
    return {
      components: {
        SocialsIcons,
      },
      setup(){
        return { args}
      },
      template: `<SocialsIcons v-bind="args"/>`
    }
  },
  args: {
    name: 'linkedin',
  }
}

export const IconTwitter = {
  render: (args) => {
    return {
      components: {
        SocialsIcons,
      },
      setup(){
        return { args}
      },
      template: `<SocialsIcons v-bind="args"/>`
    }
  },
  args: {
    name: 'twitter',
  }
}