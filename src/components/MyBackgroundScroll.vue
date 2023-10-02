<script>
import { ref, onMounted, onUnmounted} from 'vue'
const percent = ref (0)


function handleScroll(){
let scrollTop = window.scrollY
let scrollBottom = scrollTop + window.innerHeight
let offsetTop = this.$refs.container.offsetTop
let elementHeight = this.$refs.container.offsetHeight

let result = ((scrollBottom - offsetTop) / elementHeight) * 100
percent.value = Math.round(result)
}

onMounted (() => {
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>


<template>
    <div ref="container" class="backgroundScroll">
        <div class="backgroundScroll__content">
            <p>Section Scroll: {{ percent }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .backgroundScroll {
        background: black;
        height: 2000px;
        color: $white;
        &__content {
            position:sticky;
            top:0;
            left:0;
            width: 100%;
        }
    }
</style>