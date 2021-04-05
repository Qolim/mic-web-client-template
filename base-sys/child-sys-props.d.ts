/** 全局状态类型 */
declare type GlobalStore = {};

/** 全局状态更新函数类型 */
declare type UpdateGlobalStoreFn = (preStore: GlobalStore) => GlobalStore;

/** 子系统参数类型 */
declare type ChildSysProps = {
  globalStore: GlobalStore;
  setGlobalStore: (store: GlobalStore | UpdateGlobalStoreFn) => void;
};
