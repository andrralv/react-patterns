// sagas.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchUserSuccess, fetchUserFailure } from './users-saga';
import { PayloadAction } from '@reduxjs/toolkit';

  // api/userApi.js
  export const fetchUserById = async (userId: string) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  };

function* fetchUser(action: PayloadAction<any>) {
  try {
    const user = yield call(fetchUserById, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest('user/fetchUser', fetchUser);
}