<template>
    <div class="form3">
        <div class="info-box">
            <span class="icon-back">
                <a-icon class="icon" type="check" />
            </span>
        </div>
        <p class="info-box tip1">操作成功</p>
        <p class="info-box tip2">预计两小时内到账</p>
        <div class="detail-box">
            <!-- <a-row class="form-row" v-for="(item,key) in formLabels" :key="key">
                <a-col :xs="24" :sm="5" class="label">{{item}}:</a-col>
                <a-col :xs="24" :sm="12" :key="key">
                    <template v-if="key==='number'">
                    <span class="number">
                        {{forms[key]}}
                        <span class="suffix">元</span>
                    </span>
                    </template>
                    <template v-else>
                    <span>{{forms[key]}}</span>
                    </template>
                </a-col>
            </a-row> -->
        </div>
        <p class="btn-box">
            <a-button
              type="primary"
              @click="gotoFirst"
            >再转一笔</a-button>
            <a-button
                class="btn"
            >查看账单</a-button>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { Icon, Button } from 'ant-design-vue'

@Component({
  components: {
    'a-icon': Icon,
    'a-button': Button
  }
})
export default class Form3 extends Vue {
    @Emit() gotoFirst () {}
}
</script>

<style lang="less" scoped>
.form3{
    max-width: 560px;
    margin: 0 auto;
    padding: 24px 0 8px;
    color: rgba(0,0,0,.85);
    .info-box{
        text-align: center;
        margin-bottom: 24px;
        .icon-back{
            display: inline-block;
            width: 72px;
            height: 72px;
            background: #52c41a;
            border-radius: 50%;
            .icon{
                font-size: 42px;
                color: #fff;
                line-height: 80px;
            }
        }
    }
    .tip1{
        font-size: 24px;
        line-height: 1.8;
        margin-bottom: 0;
    }
    .tip2{
        color: rgba(0,0,0,.45);
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 0;
    }
    .detail-box{
        margin-top: 24px;
        padding: 24px 40px;
        background-color: #fafafa;
    }
    .btn-box{
        margin-top: 32px;
        text-align: center;
        .btn{
            margin-left: 10px;
        }
    }
}
</style>
