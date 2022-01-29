type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: Date
}

type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (data: string) => 'success' | 'duplicated'
  update: (id: string, name: string) => 'success' | 'not_found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
  tagList: tag[];
  createTag: (name: string) => void;
}