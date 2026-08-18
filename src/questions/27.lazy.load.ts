// 对照方案（scroll）需要用到 ./12.throttle 的节流函数，启用时放开下面这行 import
// import { throttle } from "./12.throttle";

// 公共加载逻辑：把 data-src 赋给 src 并移除 data-src，防止重复加载
const loadImage = (img: HTMLImageElement) => {
  const src = img.dataset.src;
  if (!src) return;

  img.src = src;
  img.removeAttribute("data-src");
  // 加载失败兜底：删除裂图节点，避免反复重试；可按需换成占位图
  img.onerror = () => {
    img.remove();
  };
};

// ===== 方案一（推荐）：IntersectionObserver =====
// 一个 observer 观察所有图片，元素进入可视区后加载并逐个解除观察
const lazyLoadViaIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage(entry.target as HTMLImageElement);
          observer.unobserve(entry.target); // 只解除当前元素，不影响其它观察
        }
      });
    },
    { threshold: 0.1 } // 元素可见 10% 时触发，可按需调整
  );

  document.querySelectorAll("img").forEach(observer.observe);
};

// ===== 方案二（对照）：scroll + getBoundingClientRect =====
// 用相对视口的坐标判断图片是否进入可视区，不受 offsetParent 影响
const lazyLoad = () => {
  const viewHeight = document.documentElement.clientHeight;

  document.querySelectorAll("img").forEach(img => {
    const { top, bottom } = img.getBoundingClientRect();
    // 顶边已进入视口（top < 视口高度），且底边尚未完全滚出视口（bottom > 0）
    if (top < viewHeight && bottom > 0) {
      loadImage(img);
    }
  });
};

// 二选一：推荐 IO 方案（默认启用）
lazyLoadViaIntersectionObserver();

// 对照方案：若需使用 scroll + getBoundingClientRect，
// 注释掉上方调用，放开文件顶部的 import，并启用下面两行：
// window.addEventListener("scroll", throttle(lazyLoad, 300), { passive: true });
// lazyLoad(); // 页面加载时先加载一次首屏
