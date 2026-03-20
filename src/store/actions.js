import { ADDTODO, DEC, INC } from "./actionTypes";

export function incAction() {
  return { type: INC };
}
export function decAction() {
  return { type: DEC };
}

export function addTodoAction(ntd) {
  return { type: ADDTODO, payload: ntd };
}
