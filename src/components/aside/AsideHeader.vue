<template>
    <header class="manage-header">
        <a-icon class="toggle-icon" :type="isOpen?'menu-fold':'menu-unfold'" @click="toggleMenu" />

        <div class="right">
            <div class="search-box">
                <a-icon class="search-icon" @click="toggleInput(true)" type="search" />
                <input
                    class="search-input"
                    :class="isOpenInput?'':'close'"
                    @blur="toggleInput(false)"
                    placeholder="站内搜索"
                    type="text"
                    v-focus="isOpenInput"
                >
            </div>
            <a-tooltip placement="bottom" >
                <template slot="title">
                    <span>使用文档</span>
                </template>
                <a-icon class="help-icon" type="question-circle" />
            </a-tooltip>
            <span class="notice-box">
                <i class="notice-nums">{{newsNum}}</i>
                <a-icon class="notice-icon" type="bell" />
            </span>
            <a-dropdown>
                <span class="avadar-box">
                    <img class="avadar" :src="avadar" alt="">
                    <span>{{userName}}</span>
                </span>
                <a-menu slot="overlay">
                <a-menu-item key="0">
                    <a-icon type="user" />
                    个人中心
                </a-menu-item>
                <a-menu-item key="1">
                    <a-icon type="setting" />
                    个人设置
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3">
                    <a-icon type="logout" />
                    退出登录
                </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator'
import { Icon, Tooltip, Dropdown, Menu } from 'ant-design-vue'
import { noneFunc } from '@/interface'

@Component({
  components: {
    'a-icon': Icon,
    'a-tooltip': Tooltip,
    'a-dropdown': Dropdown,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-menu-divider': Menu.Divider
  },
  directives: {
    focus: {
      update: function (el):void {
        el.focus()
      }
    }
  }
})
export default class AsideHeader extends Vue {
    @Prop() private isOpen!:boolean
    @Prop() private toggleMenu!:noneFunc

    isOpenInput:boolean=false
    userName:string='Serati Ma'
    avadar:string='https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
    newsNum:number = 6

    toggleInput (status:boolean):void{
      this.isOpenInput = status
    }
}
</script>

<style lang="less" scoped>
@height:64px;
@fontSize:16px;
@backColor:rgba(0, 0, 0, 0.024);
.common-style(){
    font-size: @fontSize;
    padding: 0 12px;
    cursor: pointer;
    &:hover{
        background: @backColor;
    }
};
.manage-header{
    position: relative;
    height: @height;
    line-height: @height;
    box-shadow: rgba(0, 21, 41, 0.08) 0px 1px 4px;
    background: #fff;
    /deep/.toggle-icon{ //作用域没有冠上父类的作用域，导致样式失效
        font-size: 20px;
        margin-left: 25px;
        cursor: pointer;
        transition: transform 0.5s ease;
    }
    .right{
        position: absolute;
        top: 0;
        right: 25px;
        display: flex;
        .search-box{
            /deep/.search-icon{
                cursor: pointer;
                padding: 0 12px;
                font-size: @fontSize;
            }
            .search-input{
                width: 210px;
                height: 32px;
                border: none;
                border-bottom: 1px solid #d9d9d9;
                outline: none;
                transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, height 0s ease 0s;
                &.close{
                    width: 0;
                }
            }
        }
        .help-icon{
            .common-style();
            line-height: @height;
            font-size: 15px;

        }
        .notice-box{
            position: relative;
            .common-style();
            .notice-nums{
                position: absolute;
                top: 11px;
                right: -1px;
                min-width: 20px;
                height: 20px;
                text-align: center;
                padding: 0 6px;
                line-height: 20px;
                background: red;
                color: #fff;
                border-radius: 10px;
                font-style: unset;
                font-size: 12px;
            }
            .notice-icon{
                position: relative;
                top: -2px;
            }
        }
        .avadar-box{
            .common-style();
            .avadar{
                position: relative;
                top: -3px;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 10px;
                font-size: 14px;
            }
        }
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    #d9d9d9;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #d9d9d9;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #d9d9d9;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color:    #d9d9d9;
    }
}
</style>
