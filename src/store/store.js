import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import inViewReducer from './counter/HeroSectionInviewSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    inView: inViewReducer,
})

export default configureStore({
    reducer: rootReducer,
})