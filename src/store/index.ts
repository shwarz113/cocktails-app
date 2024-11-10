import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { ContentState } from "../modules/content-page/slice/slice";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = {
  content: ContentState;
};

export type AppDispatch = typeof store.dispatch;

export default store;
