import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { reducerCount } from "./count";
import { logger } from "./middleware/logger";
import { reducersModal } from "./modal";

const middleware = [...getDefaultMiddleware(), logger];

const reducer = combineReducers({ reducerCount, reducersModal });

export const store = configureStore({ reducer, middleware });
