import {createStore} from 'redux'

import rootReducer from './component/redusers'

export default () => {
    const store = createStore(rootReducer);
    return store
}