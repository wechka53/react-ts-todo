import { combineReducers }   from 'redux';
import { reducer as todos }  from 'redusers/todo';
import { reducer as filter } from 'redusers/filter';

export default combineReducers({
    todos,
    filter
});
