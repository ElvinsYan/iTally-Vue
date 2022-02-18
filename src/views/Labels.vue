<template>
  <Layout>
    <div class="tags">
      <router-link class="tag"
                   v-for="tag in tags" :key="tag.id"
                   :to="`/labels/edit/${tag.id}`">
        <span>{{ tag.name }}</span>
        <Icon name="right"/>
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click.native="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/tagHelper';

@Component({
  components: {Button},
  computed: {
    tags() {
      return this.$store.state.tagList;
    }
  }
})
export default class Labels extends mixins(TagHelper) {}
</script>

<style lang="scss" scoped>
.tags {
  font-size: 16px;
  background: #FFFFFF;
  padding-left: 16px;

  > .tag {
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