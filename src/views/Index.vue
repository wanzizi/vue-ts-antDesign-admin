<template>
  <div class="manage-container">
    <AsideMenu :isOpen="isOpen" v-on:modify-is-open="setIsOpen" />
    <div class="manage-main">
      <AsideHeader :isOpen="isOpen" :toggleMenu="toggleMenu"></AsideHeader>
      <div class="manage-content">
        <div class="common-part">
          <a-breadcrumb>
            <a-breadcrumb-item>首页</a-breadcrumb-item>
            <template v-for="(route,index) in $route.matched">
              <a-breadcrumb-item v-if="index!==0" :key="route.path">{{route.meta.chineseName}}</a-breadcrumb-item>
            </template>
          </a-breadcrumb>
          <h3 class="module-title">{{$route.meta.chineseName}}</h3>
          <p class="module-desc" v-show="$route.meta.desc">{{$route.meta.desc}}</p>
        </div>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import AsideMenu from '@/components/aside/AsideMenu.vue' // @ is an alias to /src
import AsideHeader from '@/components/aside/AsideHeader.vue'
import { Breadcrumb } from 'ant-design-vue'

@Component({
  components: {
    AsideMenu,
    AsideHeader,
    'a-breadcrumb': Breadcrumb,
    'a-breadcrumb-item': Breadcrumb.Item
  }
})
export default class Index extends Vue {
  isOpen:boolean = true

   @Watch('$route', { immediate: true })
  onRouteChanged (val: any) {
    console.log(val, this.$router)
  }

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
    .manage-content{
      background: #f0f2f5;
      .common-part{
          padding: 16px 24px;
          background: #fff;
          .module-title{
            color: rgba(0,0,0,.85);
            font-size: 16px;
            font-weight: 700;
            margin: 12px 0 0;
          }
          .module-desc{
            color: rgba(0,0,0,.65);
            font-size: 14px;
            margin: 12px 0 16px;
          }
      }
    }
  }
}
</style>
