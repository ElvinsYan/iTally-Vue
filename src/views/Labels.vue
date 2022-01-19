<template>
  <Layout>
    <ol class="tags">
      <li v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </li>
    </ol>
    <div class="createTag-wrapper">
      <button class="createTag" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel';

tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;

  createTag(): void {
    const name = window.prompt('请输入标签名');
    if (name) {
      const message = tagListModel.create(name);
      if (message === 'duplicated') {
        window.alert('标签名重复，请检查');
      } else if (message === 'success') {
        window.alert('标签添加成功');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background: #FFFFFF;
  padding-left: 16px;

  > li {
    min-height: 44px;
    border-bottom: 1px solid #BCBBC1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      margin-right: 16px;
      height: 24px;
      width: 24px;
    }
  }
}

.createTag {
  background: #767676;
  color: #FFFFFF;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;

  &-wrapper {
    text-align: center;
    padding-top: 44px;
  }
}
</style>