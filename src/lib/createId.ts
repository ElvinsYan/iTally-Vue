let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function CreateId() {
  id++;
  return id;
}

export default CreateId;