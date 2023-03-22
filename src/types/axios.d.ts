export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export interface Result<T = any> {
    code: number;
    type?: 'success' | 'error' | 'warning';
    msg: string;
    token?: string;
    data?: any;
    rows?: any;
    depts?: any;
    permissions?: any;
    roleIds?: any;
    roles?: any;
    user?: any;
    result?: T;
  }
  