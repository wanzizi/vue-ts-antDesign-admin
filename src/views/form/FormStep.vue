<template>
    <div class="form-step">
        <a-steps class="step" :current="current">
            <a-step v-for="(item,index) in steps" :key="index" :title="item.title" />
        </a-steps>

        <div class="step-content">
            <form-1 v-show="current===0" v-on:on-form-success="handleFormSuccess"></form-1>
            <form-2 v-if="current===1" :forms="forms" :nextFunc="nextFunc" :prevFunc="prevFunc"></form-2>
            <form-3 v-if="current===2" :forms="forms" v-on:goto-first="gotoFisrt"></form-3>
            <!-- <div v-on:on-form-success="handleFormSuccess" :is="`form-${current+1}`" :nextFunc="nextFunc" :prevFunc="prevFunc"></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Steps } from 'ant-design-vue'
import Form1 from './stepForm/Form1'
import Form2 from './stepForm/Form2.vue'
import Form3 from './stepForm/Form3.vue'

interface stepObj{
    title:string
}
interface formObj{
    getAccount:string;
    payAccountType: string;
    getAccountAddr:string;
    getName:string;
    number:number;
}

@Component({
  components: {
    'a-steps': Steps,
    'a-step': Steps.Step,
    'form-1': Form1,
    'form-2': Form2,
    'form-3': Form3
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
    forms:formObj|undefined=undefined

    handleFormSuccess (form:formObj) {
      console.log(form)
      this.forms = { ...form }
      this.nextFunc()
    }

    nextFunc ():void {
      this.current++
    }
    prevFunc ():void {
      this.current--
    }
    gotoFisrt ():void{
      this.current = 0
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
