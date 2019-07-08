<template>
  <div class="manage-container">
    <AsideMenu :isOpen="isOpen" v-on:modify-is-open="setIsOpen" />
    <div class="manage-main">
      <AsideHeader :isOpen="isOpen" :toggleMenu="toggleMenu"></AsideHeader>
      <div class="manage-content">
        <div class="common-part">

        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AsideMenu from '@/components/aside/AsideMenu.vue' // @ is an alias to /src
import AsideHeader from '@/components/aside/AsideHeader.vue'

@Component({
  components: {
    AsideMenu,
    AsideHeader
  }
})
export default class Index extends Vue {
  isOpen:boolean = true

  toggleMenu ():void{
    this.isOpen = !this.isOpen
  }

  setIsOpen (val:boolean):void{
    this.isOpen = val
  }
}
</script>

<style lang="less" scoped>
.manage-container{
  height: 100%;
  display: flex;
  .manage-main{
    width: 100%;
  }
}
</style>
