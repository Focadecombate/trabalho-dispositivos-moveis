import { Tarefa } from "../../model/tarefa";
import { BaseAction } from "../";

export const TarefaActionsEnum = {
  add: "ADD",
  remove: "REMOVE",
  toggle: "TOGGLE",
  write: "WRITE",
  search: "SEARCH",
} as const;

export type TarefaActionsType = typeof TarefaActionsEnum;

export type TarefaActionsKeys =
  typeof TarefaActionsEnum[keyof typeof TarefaActionsEnum];

export type BaseTarefaAction = BaseAction<TarefaActionsKeys>;

export interface TarefasState {
  tarefas: Tarefa[];
  error: string;
  name: string;
  search: string;
}

export namespace TarefaActions {
  export interface Toggle {
    type: TarefaActionsType["toggle"];
    payload: {
      id: string;
    };
  }

  export interface Remove {
    type: TarefaActionsType["remove"];
    payload: {
      id: string;
    };
  }

  export interface Add {
    type: TarefaActionsType["add"];
    payload: {};
  }

  export interface Write {
    type: TarefaActionsType["write"];
    payload: {
      name: string;
    };
  }

  export interface Search {
    type: TarefaActionsType["search"];
    payload: {
      search: string;
    };
  }

  export type All = Add | Remove | Toggle | Write | Search;
}

export type Actor<T extends TarefaActions.All> = (
  state: TarefasState,
  action: T
) => TarefasState;
