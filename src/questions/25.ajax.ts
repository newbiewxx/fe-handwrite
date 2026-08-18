const ajax = (url: string, callback: (data: any) => void) => {
  // 1. 获取 xhr
  const xhr = new XMLHttpRequest();

  // 2.open
  xhr.open("GET", url);
  xhr.responseType = "json";

  // 3. 侦听状态改变
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        // 获取数据
        const data = xhr.response;
        // 回调
        callback(data);
      } else {
        console.log("出错了");
      }
    }
  };

  // 4. send
  xhr.send();
};


ajax("https://jsonplaceholder.typicode.com/users", (data) => {
  console.log(data);
});


export { ajax };
