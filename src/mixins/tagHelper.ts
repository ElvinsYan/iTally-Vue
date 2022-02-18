import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export class TagHelper extends Vue {
  createTag(): void {
    const name = window.prompt('请输入标签');
    if (!name) {return;}
    this.$store.commit('createTag', name);
  }
}
