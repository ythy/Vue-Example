<template>
  <div>
    <div>
      <USelect :dropdown-list="typeList" v-model="typeIndex" label-fields="name" />
    </div>
    <div> 
      <UInput v-model="username" max-ascii=10 placeholder="请输入用户名" />
    </div>
    <div>
      <UInput v-model="password" placeholder="请输入密码" />
    </div>
    <div>
      <button @click="onLogin">登录</button>
    </div> 
  </div>
</template>
<style scoped>
  
  div{
    font-size: 20px;
  }
  
</style>
<script lang="ts" src="./Login.ts" ></script>
