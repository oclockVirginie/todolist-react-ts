import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
/**
 * On définit ici le type de la fonction dispatch.
 */
type DispatchFunc = () => AppDispatch;
/**
 * On définit ici le type de la fonction useSelector.
 */
export const useAppDispatch: DispatchFunc = useDispatch;
/**
 * On définit ici le type de la fonction useSelector.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
