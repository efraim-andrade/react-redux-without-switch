import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducers, rootSagas } from './modules'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSagas)

export default store
