
// 渲染十万数据不卡顿，不阻塞主线程


// 1.数据分片
// 2. createDocumentFragment + raf

const total = 100000;
const once = 20;
const totalPages = Math.ceil(total / once);
const ul = document.querySelector("#list") as HTMLUListElement;
let count = 0;
const onceRender = () => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < once; i++) {
    const li = document.createElement("li") as HTMLLIElement;
    li.textContent = i + "";
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
  count++;
  loop();
}

const loop = () => {
  if (count < totalPages) {
    onceRender();
    // raf 在下一次渲染之前执行
    requestAnimationFrame(loop);
  }
}

loop();