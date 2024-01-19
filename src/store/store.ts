import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/reducer';

/**
 * On définit ici le store de l'application.
 * On y retruve l'ensemble des actions possibles sur l'état global de l'application.
 */
const store = configureStore({
    reducer,
});

/**
 * On exporte ici le store de l'application.
 *
 *  On pourra ainsi l'utiliser dans les composants React.
 *  On pourra ainsi utiliser les hooks useSelector et useDispatch.
 *
 */
export default store;

/**
 * On définit ici le type de l'état global de l'application.
 */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
/**
 * On définit ici le type de la fonction dispatch.
 */
export type AppDispatch = typeof store.dispatch;
