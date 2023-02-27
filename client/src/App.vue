<script lang="ts" setup>
import {io} from "socket.io-client";
import TheHead from "./components/layout/TheHead.vue";
import TheAside from "./components/layout/TheAside.vue";
import TheMain from "./components/layout/TheMain.vue";


const sock = io('http://localhost:8000/user', {
  auth: {
    username: 'asd'
  }
});
sock.on('connect', () => {
  console.log('conn');
})

sock.emit('event', {
  hi: 10
})

</script>

<template>
  <el-container direction="vertical" style="min-height: 100vh">
   <the-head />
     <el-container>
       <the-aside />
       <the-main />
     </el-container>
  </el-container>
</template>

<style scoped>
</style>
