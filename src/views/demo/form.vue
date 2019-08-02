<template>
    <div>
        111<AntFormTool name="test" :configs="form.controls"></AntFormTool>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import AntFormTool from '@/components/public/form/ant'
import form from '@/config/form'
@Component({
  components: {
    AntFormTool
  }
})
export default class FormDemo extends Vue {
    form=form
    mounted () {
      console.log(this.form)
    }
}
</script>

<style lang="less" scoped>

</style>
