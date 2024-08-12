const { configureStore } = require("@reduxjs/toolkit");
import postSlice from "./slice/postSlice";
export const store = configureStore({
  reducer: {
    post: postSlice,
  },
});
