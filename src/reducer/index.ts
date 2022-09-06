import {combineReducers} from 'redux';
import ActiveCategoryReducer from './activeCategory';

const rootReducer = combineReducers({
    activeCategoryReducer: ActiveCategoryReducer,
});

export type IRootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;