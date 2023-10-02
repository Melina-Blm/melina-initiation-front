<script setup>
//import MyButton from '@/components/elements/MyButton.vue'
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import MyButton from '@/components/elements/MyButton.vue';
import MyBackgroundScroll from '@/components/MyBackgroundScroll.vue';

</script>

<template>
  <DefaultLayout>
    <template v-slot:header>
      <nav>
        <ul>
          <li><a href="#">Nav link 1</a></li>
          <li><a href="#">Nav link 1</a></li>
          <li><a href="#">Nav link 1</a></li>
        </ul>
      </nav>
      </template>

      <template v-slot:aside>
      <nav>
        <ul>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 1</a></li>
          <li><a href="#">Aside link 1</a></li>
        </ul>
      </nav>
      </template>
    <MyBackgroundScroll/>
    <h1>Hello Word ! </h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, minima.</p>
    <MyButton  href='/about'>My link Button</MyButton>

    <template v-slot:footer>
      <MyButton  variant="rounded">My rounded button</MyButton>
    
      
    </template>
  </DefaultLayout>


  <!-- <MyButton  size="small"  variant="rounded" href='/about'>My button</MyButton>
  <MyButton  href='/about'>My link Button</MyButton>
  <MyButton  variant="rounded">My rounded button</MyButton> -->
</template>

