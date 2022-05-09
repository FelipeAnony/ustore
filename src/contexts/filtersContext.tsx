import { createContext } from "react";
import { FiltersState, initialFiltersState, useFiltersReducer } from "../reducers/filtersReducer";
import { PropsType, ReducerActionType } from "../types/mainTypes";


type ContextInitialType = {
  filters: FiltersState;
  filtersDispatch: React.Dispatch<ReducerActionType>;
}

const contextInitialState = {
  filters: initialFiltersState,
  filtersDispatch: () => null
}

export const filtersContext = createContext<ContextInitialType>(contextInitialState);

function ContextProvider({children}:PropsType) {
  const [filters, filtersDispatch] = useFiltersReducer();

  return ( 
    <filtersContext.Provider value={{filters, filtersDispatch}}>
      {children}
    </filtersContext.Provider>
   );
}

export default ContextProvider;
