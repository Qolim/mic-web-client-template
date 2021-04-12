import { registerMicroApps, start } from "qiankun";
import { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { baseServer } from "./server";
import { QianKunProps } from "./type";

export const MicApps: React.FC = () => {
  /** 微应用挂载的dom节点 */
  const ContainerDom = useRef<HTMLDivElement>(null);
  /** 主应用history对象注入微应用 用于微应用之间进行路由跳转 */
  const history = useHistory();
  /** 获取基础服务数据，注册微应用并传入参数 */
  useEffect(() => {
    const baseServe = baseServer();
    const qiankunProps = { baseServe, history };
    if (ContainerDom.current) {
      registerMicroApps<QianKunProps>([
        {
          name: "home",
          entry: "http://localhost:9001/",
          activeRule: [(location) => location.pathname === "/", "/home"],
          container: ContainerDom.current,
          props: qiankunProps,
        },
        {
          name: "feature",
          entry: "http://localhost:9002/",
          activeRule: "/feature",
          container: ContainerDom.current,
          props: qiankunProps,
        },
      ]);
      start({
        sandbox: {
          strictStyleIsolation: true,
          experimentalStyleIsolation: true,
        },
      });
    }
  }, []);
  return <div ref={ContainerDom} className="mic-apps-container"></div>;
};
