import { useReducer, createContext } from 'react';

export const ListContext = createContext();
export const ListDispatchContext = createContext();

function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: 4, text: 'ddd' }];
    case 'edit':
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, text: 'new ' + item.text };
        } else {
          return item;
        }
      });
    case 'remove':
      return state.filter((item) => {
        if (item.id === action.id) {
          return false;
        } else {
          return true;
        }
      });
  }
}

function ListProvider({ children }) {
  const [list, listDispatch] = useReducer(listReducer, [
    { id: 1, text: 'aaa' },
    { id: 2, text: 'bbb' },
    { id: 3, text: 'ccc' },
  ]);
  return (
    <ListContext.Provider value={list}>
      <ListDispatchContext.Provider value={listDispatch}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  );
}

export default ListProvider;
