import { call, put, takeLatest } from 'redux-saga/effects'

import { REQUEST_API_DATA, receiveApiData } from '../actions';
import { fetchData } from '../api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   try {
       //do api call
      //const user = yield call(Api.fetchUser, action.payload.userId);
      
      const data = yield call(fetchData);
      yield put(receiveApiData(data));
   } catch (e) {
      console.log(e);
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  }
*/

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent action request . If "REQUEST_API_DATA" gets
  dispatched while a call is already pending, that pending call is cancelled
  and only the latest one will be run.
*/
export function* userSaga1() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}




function* getApiData2(action) {
  try {
      //do api call
     //const user = yield call(Api.fetchUser, action.payload.userId);
     
     const data = yield call(fetchData);
     yield put(receiveApiData(data));
  } catch (e) {
     console.log(e);
  }
}

export function* userSaga2() {
 yield takeLatest("SOME_ACTION", getApiData2);
}
