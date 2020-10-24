import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  // string으로 할 수도 있지만, enum으로 하는게 더 효율적
  fetchTodos,
  deleteTodo,
}

// 모든 action types 묶기
export type Action = FetchTodosAction | DeleteTodoAction;
