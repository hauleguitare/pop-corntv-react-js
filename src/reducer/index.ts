import {combineReducers} from 'redux';
import ActiveCategoryReducer from './ActiveCategory';

const rootReducer = combineReducers({
    activeCategoryReducer: ActiveCategoryReducer,
});

export type IRootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;