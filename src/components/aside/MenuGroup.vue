<template functional>
  <sub-menu :key="props.menuInfo.key">
    <span slot="title">
      <a-icon v-if="props.menuInfo.icon" :type="props.menuInfo.icon" />
      <span>{{props.menuInfo.title}}</span>
    </span>
    <template v-if="props.menuInfo.children&&props.menuInfo.children.length">
      <template v-for="item in props.menuInfo.children">
        <MenuGroup v-if="item.children&&item.children.length" :menuInfo="item" :key="item.key"></MenuGroup>
        <menu-item v-else :key="item.key">
          <a-icon v-if="item.icon" :type="item.icon" />
          {{item.title}}
        </menu-item>
      </template>
    </template>
  </sub-menu>
</template>

<script lang="ts">
// export default {
//   props: ['menuInfo']
// }
import { Menu, Icon } from 'ant-design-vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

interface MenuObj {
  title:string;
  key:string;
  icon?:string;
  children?:MenuObj[];
}

@Component({
  components: {
    'a-icon': Icon,
    MenuItem: Menu.Item,
    SubMenu: Menu.SubMenu
  }
})

export default class MenuGroup extends Vue {
  @Prop() private menuInfo!: MenuObj
}
</script>
