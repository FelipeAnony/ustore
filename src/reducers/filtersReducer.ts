import { useReducer } from "react";
import { ReducerActionType } from "../types/mainTypes";

export type FiltersState = {
  searchParams: string;
  price: {from: string, to: string};
  condition: string;
  date: string;
  categories: string;
}

export const initialFiltersState = {
  searchParams: '',
  price: {from: 'default', to: 'default'},
  condition: 'default',
  date: 'default',
  categories: 'All'
}

const filtersReducer = (state: FiltersState, action:ReducerActionType) => {
  switch(action.type) {
    case 'CHANGE_ALL':
      return {...state, ...action.payload.all};
    case 'RESTORE': 
      return {...initialFiltersState};
    case 'CHANGE_SEARCH_PARAMS':
      return {...state, searchParams: action.payload.searchParams};
    case 'CHANGE_PRICE_FILTER': 
      return {...state, price: action.payload.price};
    case 'CHANGE_CONDITION_FILTER':
      return {...state, condition: action.payload.condition};
    case 'CHANGE_DATE_FILTER': 
      return {...state, date: action.payload.date};
    case 'CHANGE_CATEGORIES_FILTER':
      return {...state, categories: action.payload.categories};
  }

  return state;
}

export const useFiltersReducer = () => {
  return useReducer(filtersReducer, initialFiltersState);
}