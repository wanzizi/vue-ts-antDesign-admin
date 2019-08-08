<template>
    <a-card class="list-table" :bordered="false">

        <slot name="section"></slot>
        <slot name="buttons"></slot>
<slot name="table"></slot>

    </a-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Card } from 'ant-design-vue'

@Component({
  components: {
    'a-card': Card
  }
})
export default class ListTable extends Vue {

}
</script>

<style scoped lang="less">

</style>
