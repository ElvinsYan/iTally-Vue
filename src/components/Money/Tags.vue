<template>
  <div class="tags">
    <div class="new-tag">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{ tag }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];

  toggle(tag: string): void {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create(): void {
    const name = window.prompt('请输入标签');
    if (name !== '' && this.dataSource) {
      this.$emit('update:dataSource', [...this.dataSource, name]);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #FFFFFF;
  flex-grow: 1;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: #D9D9D9;
      background: $bg;
      height: 24px;
      line-height: 24px;
      border-radius: 12px;
      padding: 0 18px;
      margin-right: 24px;
      margin-top: 8px;

      &.selected {
        background: darken($bg, 50%);
        color: white;
      }
    }
  }

  > .new-tag {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}

</style>