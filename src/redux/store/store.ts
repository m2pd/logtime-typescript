import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {rootReducer} from '../reducers'
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'
import { RootStateOrAny } from 'react-redux';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['currentUser']
};

const pReducer = persistReducer<RootStateOrAny>(persistConfig, rootReducer)

const middleware = [thunk];

const store = createStore(
    pReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
)
export const persistor = persistStore(store);


export default store;