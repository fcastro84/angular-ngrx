import { createAction, props } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/Item.interface';


export const LoadItems = createAction(
  '[Item List] Load items'
);

export const LoadedItems = createAction(
  '[Item List] Loaded success',
  props<{items: ItemModel[]}>()
);
