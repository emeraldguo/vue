
<template>
  <div class="">
    <h1>This is an about page</h1>
    <HelloWorldEx msg="Welcome to Your Vue.js + TypeScript App"/>
    <MainTarBar/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorldEx from '@/components/helloworld/HelloWorldEx.vue'; // @ is an alias to /src
import MainTarBar from '@/components/content/maintarbar/MainTarBar.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'About',
  components: {
    HelloWorldEx,
    MainTarBar,
  },
});
</script>
