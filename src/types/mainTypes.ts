
export type ReducerActionType = {
  type: string;
  payload: {
    [key: string] : any;
  }

}

export type PropsType = {
  children?: JSX.Element;
}