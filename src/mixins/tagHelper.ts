import Vue from 'vue';
import Component from 'vue-class-component';

const map: { [key: string]: string } = {
  'tag name duplicated': '标签名重复'
};

@Component
export class TagHelper extends Vue {
  createTag(): void {
    const name = window.prompt('请输入标签');
    if (!name) {return;}
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert(map['tag name duplicated'] || '未知错误');
    }
  }
}
