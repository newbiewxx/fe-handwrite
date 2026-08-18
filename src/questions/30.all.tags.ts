const calcAllTagsLength = () => {
  return [...new Set([...document.querySelectorAll("*")].map(i => i.tagName))].length;
};


export {
  calcAllTagsLength
}