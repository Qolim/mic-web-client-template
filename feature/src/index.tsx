import { QianKunProps } from "./type";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

function render<S = any>({ container, history, baseServe }: QianKunProps<S>) {
  ReactDOM.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/feature" : ""}>
      <App history={history} baseServe={baseServe} />
    </BrowserRouter>,
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

if (window.__POWERED_BY_QIANKUN__) {
  /** 设置静态资源路径 */
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  /** 微应用独立运行 */
  render({});
}

/** 启动时 */
export async function bootstrap() {}
/** 挂载时 */
export async function mount({ container, history, baseServe }: QianKunProps) {
  render({
    container,
    history,
    baseServe,
  });
}
/** 卸载时 */
export async function unmount({ container }: QianKunProps) {
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : (document.querySelector("#root") as any)
  );
}
