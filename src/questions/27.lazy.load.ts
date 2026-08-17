import { throttle } from "./12.throttle";

const lazyLoad = () => {
  const imgs = document.querySelectorAll("img");
  const viewHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  imgs.forEach(img => {
    // 判断图片是否在可视区域
    // 获取图片的 offsetTop
    if (scrollTop > img.offsetHeight - viewHeight) {
      const src = img.getAttribute("data-src");
      if (src) {
        img.src = src;
        img.removeAttribute("data-src");
      }
    }
  });
};

window.addEventListener("scroll", throttle(lazyLoad, 300));
