import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const store = {
  //record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem): void => recordListModel.create(record),

  //tag store
  tagList: tagListModel.fetch(),
  findTag(id: string): Tag | undefined {
    return this.tagList.filter(t => t.id === id)[0];
  },
  createTag: (name: string): void => {
    const message = tagListModel.create(name);
    if (message === 'duplicated') {
      window.alert('标签名重复，请检查');
    } else if (message === 'success') {
      window.alert('标签添加成功');
    }
  },
  removeTag: (id: string): boolean => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string): 'success' | 'not_found' | 'duplicated' => {
    return tagListModel.update(id, name);
  },
};

export default store;