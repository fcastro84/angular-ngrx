import { createReducer, on } from '@ngrx/store';
import { LoadItems, LoadedItems } from '../actions/items.actions';
import { ItemsState } from 'src/app/core/models/item.state';



// Estado inicial
export const initialState: ItemsState = { loading: false, items: []};


//Funciones reducer

export const itemsReducer = createReducer(
  initialState,
  on(LoadItems, (state) => {
    return { ...state, loading: true}
  }),
  on(LoadedItems, (state, { items } ) => {
    return { ...state, loading: false, items: items }
  }),
);
