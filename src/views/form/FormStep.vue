<template>
    <div class="form-step">
        <a-steps class="step" :current="current">
            <a-step v-for="(item,index) in steps" :key="index" :title="item.title" />
        </a-steps>

        <div class="step-content">
            <form-1 :nextFunc="nextFunc"></form-1>
            <!-- <div :is="`form-${current+1}`" :nextFunc="nextFunc" :prevFunc="prevFunc"></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Steps } from 'ant-design-vue'
import Form1 from './stepForm/Form1'

interface stepObj{
    title:string
}

@Component({
  components: {
    'a-steps': Steps,
    'a-step': Steps.Step,
    'form-1': Form1
  }
})
export default class FormStep extends Vue {
    current:number=0
    steps:stepObj[]=[
      {
        title: '填写转账信息'
      },
      {
        title: '确认转账信息'
      },
      {
        title: '完成'
      }
    ]

    nextFunc ():void {
      this.current++
    }
    prevFunc ():void {
      this.current--
    }
}
</script>

<style lang="less" scoped>
.form-step{
    .step{
        max-width: 750px;
        margin: 16px auto;
    }
    .step-content{
        max-width: 500px;
        margin: 40px auto 0;
    }
}
</style>
