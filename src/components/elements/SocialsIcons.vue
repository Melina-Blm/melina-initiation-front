<script setup>

import { computed } from 'vue';
import IconFacebook from '../icons/socialsicons/IconFacebook.vue'
import IconTwitter from '../icons/socialsicons/IconTwitter.vue'
import IconInstagram from '../icons/socialsicons/IconInstagram.vue'
import IconLinkedIn from '../icons/socialsicons/IconLinkedIn.vue'


const props = defineProps ({
    name: String
})


const getIcon = computed (() => {  
    switch (props.name) {
        case 'twitter' :
            return IconTwitter
        case 'instagram' :
            return IconInstagram
        case 'linkedin' :
            return IconLinkedIn
        default: 
            return IconFacebook
        
    }

})
</script>

<template>
<i class="icon">
    <component :is='getIcon'/>
</i>
</template>

<style lang='scss' scoped>

.icon {
    align-items: center;
    display: inline-flex;
    border-radius : 100%;
    height: rem(50);
    justify-content: center; 
    width: rem(50);
    color: $gray;
    background-color: $secondary-color;

}

</style>