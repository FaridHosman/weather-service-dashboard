import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epic';
import { rootReducer } from './root-reducer';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    // @ts-ignore
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      // @ts-ignore
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
    /* eslint-enable */
  }

  const enhancers = [applyMiddleware(epicMiddleware)];

  const store = createStore(
    rootReducer,
    composeEnhancers(...enhancers)
  );

  epicMiddleware.run(rootEpic);

  return store;
}
