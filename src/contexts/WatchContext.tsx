import React, { createContext, useReducer, Dispatch, ReactNode, useEffect, useRef } from 'react';

type StateType = {
  date: Date;
};

type ActionType =
  | { type: 'setDate'; payload: { date: Date } };

type Reducer = (state: StateType, action: ActionType) => StateType;

const initiialState: StateType = {
  date: new Date(),
};

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'setDate':
      return {
        ...state,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const WatchContext = createContext<[StateType, Dispatch<ActionType>]>([initiialState, (() => {}) as Dispatch<ActionType>]);

export const WatchContextProvider = ({
  children,
}: { children: ReactNode }) => {
  const store = useReducer(reducer, initiialState);

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        store[1]({
          type: 'setDate',
          payload: { date: new Date() },
        })
      }, 1000)
    }
  }, [])

  return <WatchContext.Provider value={store}>{children}</WatchContext.Provider>;
};
