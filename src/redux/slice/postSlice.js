const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{ id: 1, title: "hello" }];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const { id, title } = action.payload;
      state.push({ id, title });
    },
    deletePost: (state, action) => {
      const {val1} = action.payload;
      return state.filter((val) => val.id !== val1);
    },
  },
});
export const {addPost,deletePost} = postSlice.actions
export default postSlice.reducer;
