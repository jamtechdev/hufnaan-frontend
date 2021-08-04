import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import { composeWithDevTools  } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduxMulti from 'redux-multi'
const persistConfig = {
    key: 'pyrevsysreftock',
    storage
  }
const loggerMiddleware = createLogger();

const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const composeEnhancers = composeWithDevTools({trace: true, traceLimit: 20});
export const store = createStore(
    persistedReducer,{},composeEnhancers( applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        reduxMulti
    ))
   
)

export const persistor = persistStore(store)
