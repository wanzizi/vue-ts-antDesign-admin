<template>
    <a-row class="form-step2">
        <template v-if="forms">
            <template v-for="(item,index,key) in formLabels">
                <a-col :xs="24" :sm="5" :key="key">{{item}}:</a-col>
                <a-col :xs="24" :sm="12" :key="key">{{forms[key]}}</a-col>
            </template>
        </template>
    </a-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Row, Col } from 'ant-design-vue'
import { colObj } from '@/interface'

interface formObj{
    getAccount:string;
    payAccountType: string;
    getAccountAddr:string;
    getName:string;
    number:number;
}

@Component({
  components: {
    'a-row': Row,
    'a-col': Col
  }
})

export default class Form2 extends Vue {
    @Prop() private forms!:formObj

    formLabels={
      getAccount: '付款账户',
      getAccountAddr: '收款账户',
      getName: '收款人姓名',
      number: '转账金额'
    }
}
</script>

<style lang="less" scoped>

</style>
