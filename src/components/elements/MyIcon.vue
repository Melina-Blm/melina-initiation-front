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

    const props = defineProps ({
        name: String,
        variant: String,
        stroke: String,
        size: String,

    })

const className = computed (() => ({

'-white': props.variant === 'white',
'-black': props.variant === 'black',
'-orange': props.variant === 'orange',
'-lightorange': props.variant === 'light orange',

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
        background-color: $primary-color;
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
                width:rem(20);
            }

        
    }

    </style>