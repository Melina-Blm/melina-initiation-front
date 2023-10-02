<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import MyButton from '@/components/elements/MyButton.vue';

</script>


<template>
  <DefaultLayout>
    <template #header>
      <p>Test</p>
    </template>
    <template #aside>
    <p>Test</p>
    </template>
    <template #footer>
        <p>Test</p>
    </template>

    <p>Hello World</p>
    <MyButton  href='/about'>My link Button</MyButton>

  </DefaultLayout>

</template>

<style>
</style>
