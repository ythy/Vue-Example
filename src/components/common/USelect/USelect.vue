<template>
  <select @change="onSelectChange" >
    <option v-for="(item, index) in dropdownList" :key="index" :selected="getSelected(index)" >
      {{getOptionItems(item)}}
    </option>
  </select>
</template> 

<script lang="ts" src="./USelect.ts"></script>