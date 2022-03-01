type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

type RecordItem = {
  tags: Tag[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: string
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
