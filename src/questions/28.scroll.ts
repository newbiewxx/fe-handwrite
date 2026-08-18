
// 滚动加载
window.addEventListener("scroll", () => {

  // 1. clientHeight 可视区域的高度 (视口高度)
  const clientHeight = document.documentElement.clientHeight;
  // 2. scrollTop 滚动条已滚动的高度
  const scrollTop = document.documentElement.scrollTop;
  // 3. scrollHeight 滚动条的总高度，页面的高度
  const scrollHeight = document.documentElement.scrollHeight;
  // 4. window.scrollY 滚动条已滚动的高度 === scrollTop
  const windowScrollY = window.scrollY;
  
  // 说明已经滚动了最底部
  if (clientHeight + scrollTop >= scrollHeight) {
    // 触发加载更多
    // onLoad()
  }
})