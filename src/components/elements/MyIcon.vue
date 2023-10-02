<script setup>

import { computed } from 'vue';
import IconCommunity from '../icons/IconCommunity.vue'
import IconDocumentation from '../icons/IconDocumentation.vue';
import IconEcosystem from '../icons/IconEcosystem.vue'
import IconSupport from '../icons/IconSupport.vue'
import IconTooling from '../icons/IconTooling.vue'


const props = defineProps ({
    name: String
})


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
        default: 
            return IconTooling
        
    }

})
</script>

<template>
<i class="icon">
    <component :is='getIcon'/>

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
    color: $gray;
    background-color: $white;

}

</style>