<template>
  <a-locale-provider :locale="locale" id="app">
    <router-view/>
  </a-locale-provider>
</template>

<script lang="ts">
import { LocaleProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    'a-locale-provider': LocaleProvider
  }
})
export default class App extends Vue {
  locale:any = zhCN
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
html,
body,
#app{
  height: 100%;
}
</style>
