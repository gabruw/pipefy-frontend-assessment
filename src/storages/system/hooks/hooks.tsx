//#region Imports

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { SystemDispatch, SystemState } from '../store';

//#endregion

export const useSystemDispatch = () => useDispatch<SystemDispatch>();

export const useSystemSelector: TypedUseSelectorHook<SystemState> = useSelector;
