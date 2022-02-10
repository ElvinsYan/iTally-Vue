import createId from '@/lib/createId';

const localStorageKeyName = 'tagList';

const tagStore = {
  tagList: [] as Tag[],
  fetchTags(): Tag[] {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  findTag(id: string): Tag | undefined {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag(name: string): 'duplicated' | 'success' {
    const names = this.tagList.map(item => item.name);
    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复，请检查');
      return 'duplicated';
    }
    const id = createId().toString();
    this.tagList.push({id, name});
    this.saveTags();
    window.alert('标签添加成功');
    return 'success';
  },
  removeTag(id: string): boolean {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTags();
    return true;
  },
  updateTag(id: string, name: string): 'duplicated' | 'success' | 'not_found' {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        this.saveTags();
        return 'success';
      }
    } else {
      return 'not_found';
    }
  },
  saveTags(): void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }
};

tagStore.fetchTags();

export default tagStore;