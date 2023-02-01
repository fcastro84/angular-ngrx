import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemsState } from '../../core/models/item.state';



export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
    (state: ItemsState) => state.items
  );

export const selectLoadingItems = createSelector(
  selectItemsFeature,
      (state: ItemsState) => state.loading
    );
