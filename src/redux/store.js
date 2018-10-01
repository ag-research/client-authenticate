import {createStore} from 'redux'
import globalreducer from './reducers/Globalreducer'
import globalmiddleware, { sagaMiddleware } from './middlewares/Globalmiddleware'
import globalsaga from './middlewares/sagas/Globalsaga'

const store = createStore(globalreducer, globalmiddleware);

sagaMiddleware.run(globalsaga);

export default store;