    <script setup>

    import { computed } from 'vue';
    import IconCommunity from '../icons/IconCommunity.vue'
    import IconDocumentation from '../icons/IconDocumentation.vue';
    import IconEcosystem from '../icons/IconEcosystem.vue'
    import IconSupport from '../icons/IconSupport.vue'
    import IconTooling from '../icons/IconTooling.vue'
    import IconArrowRight from '../icons/IconArrowRight.vue';
    import IconArrowLeft from '../icons/IconArrowLeft.vue';
    import IconArrowRight2 from '../icons/IconArrowRight2.vue';
    import IconClock from '../icons/IconClock.vue';
    import IconMap from '../icons/IconMap.vue';
    import IconPhone from '../icons/IconPhone.vue';
    import IconArrowBold from '../icons/IconArrowBold.vue';
    import IconCamion from '../icons/IconCamion.vue';
    import IconForkKnife from '../icons/IconForkKnife.vue';
    import IconForkSpoon from '../icons/IconForkSpoon.vue';
    import IconFacebook from '../icons/IconFacebook.vue'
    import IconTwitter from '../icons/IconTwitter.vue'
    import IconInstagram from '../icons/IconInstagram.vue'
    import IconLinkedIn from '../icons/IconLinkedIn.vue'
    import IconStarStroke from '../icons/IconStarStroke.vue'
    import IconStar from '../icons/IconStar.vue'



    const props = defineProps ({
        name: String,
        variant: String,
        stroke: String,
        size: String,
        hasIcon: Boolean,

    })

const className = computed (() => ({

'-white': props.variant === 'white',
'-black': props.variant === 'black',
'-orange': props.variant === 'orange',
'-lightorange': props.variant === 'light orange',
'-nobg': props.variant === 'nobg',

'-whitestroke': props.stroke === 'white',
'-blackstroke': props.stroke === 'black',
'-orangestroke': props.stroke === 'orange',
'-lightorangestroke': props.stroke === 'light orange',

'-small': props.size === 'small',
'-big': props.size === 'big',

}))



    const getIcon = computed (() => {  
        switch (props.name) {
            case 'community' :
                return IconCommunity
            case 'documentation' :
                return IconDocumentation
            case 'ecosystem' :
                return IconEcosystem
            case 'support' :
                return IconSupport
            case 'arrow right' :
                return IconArrowRight
            case 'arrow left' :
                return IconArrowLeft
            case 'arrow right2' :
                return IconArrowRight2
            case 'clock' :
                return IconClock
            case 'phone' :
                return IconPhone
            case 'map' :
                return IconMap
            case 'arrow bold' :
                return IconArrowBold
            case 'camion' :
                return IconCamion
            case 'fork knife' :
                return IconForkKnife
            case 'fork spoon' :
                return IconForkSpoon
            case 'facebook' :
                return IconFacebook
            case 'star stroke' :
                return IconStarStroke
            case 'star' :
                return IconStar
            case 'instagram' :
                return IconInstagram
            case 'twitter' :
                return IconTwitter
            case 'linked in' :
                return IconLinkedIn
            default: 
                return IconTooling
            
        }

    })
    </script>

    <template>
    <i class="icon" :class="className">
        <component :is='getIcon' class="icon__taille"/>

        <!-- AUTRE MANIERE DE FAIRE 
        <IconCommunity v-if='name === "community"'/>
        <IconDocumentation v-else-if='name === "documentation"'/>
        <IconSupport v-else-if='name === "support"'/>
        <IconTooling v-else-if='name === "tooling"'/>
        <IconEcosystem v-else/> -->
    </i>
    </template>

    <style lang='scss' scoped>

    .icon {
        align-items: center;
        display: inline-flex;
        border-radius : 100%;
        box-shadow: 0 0 5px 0 $gray;
        height: rem(50);
        justify-content: center; 
        width: rem(50);
        color: $white;
        &.-nobg{
            background-color: none;
            box-shadow: none;
        }
        &.-white {
        background-color: $white;
        }
        &.-black {
        background-color: $black;
        }
        &.-orange {
        background-color: $primary-color;
        }
        &.-lightorange {
        background-color: $secondary-color;
        }
        &.-lightorangestroke {
        color: $secondary-color;
        }
        &.-orangestroke {
        color: $primary-color;
        }
        &.-whitestroke {
        color: $white;
        }
        &.-blackstroke {
        color: $black;
        }
        &.-small{
        height: rem(30);
        width: rem(30);
            .icon__taille {
                width:rem(15);
            }
        }
        &.-big{
        height: rem(70);
        width: rem(70);
            .icon__taille {
                width:rem(35);
            }
        }
        .icon__taille {
                width:rem(25);
            }

        
    }

    </style>