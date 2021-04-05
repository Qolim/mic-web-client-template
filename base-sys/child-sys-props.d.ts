declare type GlobalStore = {};

declare type UpdateGlobalStoreFn = (preStore: GlobalStore) => GlobalStore;

declare type ChildSysProps = {
  globalStore: GlobalStore;
  setGlobalStore: (store: GlobalStore | UpdateGlobalStoreFn) => void;
};
