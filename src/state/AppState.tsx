import React, { createContext, useContext, useState } from 'react';


interface AppStateValue {
  cart: {
    items: { name: string; price: number, id: number, description: string, quantity: number }[]
  }
}

const defaultStateValue: AppStateValue = {
  cart: {
    items: []
  }
};

export const AppStateContext = createContext(defaultStateValue);
export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);
export const useSetState = () => {
  const setState = useContext(AppSetStateContext);
  if (!setState) {
    throw new Error('Something went wrong');
  }
  return setState;
};
const AppStateProvider: React.FC = ({children}) => {
  const [state, setState] = useState(defaultStateValue);
  return (
    <AppSetStateContext.Provider value={setState}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppSetStateContext.Provider>);
};
export default AppStateProvider;
