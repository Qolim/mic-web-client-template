import { registerMicroApps, start } from "qiankun/es/apis";
import { useGlobalStore } from "./store";
import * as React from "react";

export const App: React.FC = () => {
  const headerRef = React.useRef<HTMLElement>(null);
  const mainRef = React.useRef<HTMLElement>(null);

  const { store, set_store } = useGlobalStore();

  React.useEffect(() => {
    if (headerRef.current && mainRef.current) {
      /** 注册微应用 */
      registerMicroApps<ChildSysProps>([
        {
          name: "nav",
          entry: "//localhost:9001",
          container: headerRef.current,
          activeRule: "/",
          props: { globalStore: store, setGlobalStore: set_store },
        },
        {
          name: "home",
          entry: "//localhost:9002",
          container: mainRef.current,
          activeRule: "/home",
          props: { globalStore: store, setGlobalStore: set_store },
        },
      ]);
      /** 启动微应用 */
      start();
    }
  }, [headerRef.current, mainRef.current, store]);

  return (
    <>
      <header ref={headerRef}></header>
      <main ref={mainRef}></main>
    </>
  );
};
