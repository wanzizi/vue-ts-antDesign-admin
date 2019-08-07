<template>
    <div class="form-senior">
        <div class="form-content-box">
            <h3 class="title">仓库管理</h3>
            <AntFormTool :configs="senior1.controls"></AntFormTool>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AntFormTool from '@/components/public/form/ant'
import senior1 from '@/config/forms/senior1'

@Component({
  components: {
    AntFormTool
  }
})
export default class FormSenior extends Vue {
    senior1:any=senior1
}
</script>

<style lang="less" scoped>
.form-senior{
    height: 100%;
    .form-content-box{
        background: #fff;
        .title{
            color: rgba(0,0,0,.85);
            font-weight: 500;
            font-size: 16px;
            padding: 16px 24px;
            border-bottom: 1px solid #e8e8e8;
        }
    }
}
</style>
