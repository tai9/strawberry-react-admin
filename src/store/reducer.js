import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';
import followersReducer from './followersReducer';

//-----------------------|| COMBINE REDUCER ||-----------------------//

const reducer = combineReducers({
    customization: customizationReducer,
    postState: userReducer,
    followerState: followersReducer
});

export default reducer;
