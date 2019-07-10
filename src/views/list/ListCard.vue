<template>
    <div class="list-card-main">
      <a-list
        :grid="{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 3 }"
        :dataSource="list"
      >
        <a-list-item slot="renderItem" slot-scope="item,index">
            <section class="card-item">
                <a-button v-if="index===0" class="add-btn" type="dashed" icon="plus">新增产品</a-button>
                <a-card v-else hoverable>
                  <template class="ant-card-actions" slot="actions">
                      <span>操作1</span>
                      <span>操作2</span>
                  </template>
                  <a-card-meta :title="'VUE'+index">
                      <a-avatar slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png" />
                      <p class="description-ellipsis-multiple-line" slot="description">
                        {{content}}
                      </p>
                  </a-card-meta>
                </a-card>
            </section>
        </a-list-item>
      </a-list>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Avatar, Button, Icon, Card, List } from 'ant-design-vue'

const data1:Array<Number> = []
for (let i = 0; i < 9; i++) {
  data1.push(i)
}
@Component({
  components: {
    'a-card': Card,
    'a-list': List,
    'a-list-item': List.Item,
    'a-avatar': Avatar,
    'a-card-meta': Card.Meta,
    'a-button': Button,
    'a-icon': Icon
  }
})

export default class ListCard extends Vue {
  list:Array<any>=data1
  content:any='在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。'
}
</script>

<style scoped lang="less">
.list-card-main{
  padding: 24px 24px 0 24px;
  .card-item{
    margin-bottom: 16px;
    background-color: #fff;
    .add-btn{
        height: 188px;
        width: 100%;
    }
  }
  .ant-card-meta-description{
      .description-ellipsis-multiple-line{
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
      }
  }
}
</style>
