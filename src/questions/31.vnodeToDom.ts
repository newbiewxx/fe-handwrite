type Vnode =
  | {
      tag: string;
      attrs: { [key: string]: any };
      children: Vnode[];
    }
  | string
  | number;

const render = (vnode: Vnode, container: HTMLElement) => {
  container.appendChild(_render(vnode));
};

const _render = (vnode: Vnode) => {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }

  if (typeof vnode === "string") {
    const textNode = document.createTextNode(vnode);
    return textNode;
  }

  const { tag, attrs, children } = vnode;
  const dom = document.createElement(tag);
  for (const key in attrs) {
    const value = attrs[key];
    dom.setAttribute(key, value);
  }

  // 递归创建子节点
  children.forEach(child => {
    render(child, dom);
  });

  return dom;
};

export { render };
