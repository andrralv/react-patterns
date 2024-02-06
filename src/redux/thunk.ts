import { createAsyncThunk, createSlice, PayloadAction } from  '@reduxjs/toolkit';

export const fetchUserById = createAsyncThunk(
  'user/fetchByIdStatus',
  async () => {
    const response = await fetch('https://6507497f3a38daf4803f5f1c.mockapi.io/words');
    return response.json();
  }
)

interface UserState {
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  user: {},
  status: 'idle',
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action: PayloadAction<any>) => {
        state.status = 'failed';
        state.error = action.payload || 'Unknown error';
      })
  }
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;