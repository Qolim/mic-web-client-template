export type SetGlobalState<S = any> = (state: S) => void;

export type onGlobalStateChange<S = any> = (
  callback: (newState: S, preState: S) => void
) => void;

export interface QianKunProps<S = any> {
  container?: Element;
  /** 基础服务 */
  baseServe?: Promise<any>;
  /** 主应用路由 */
  history?: any;
}
