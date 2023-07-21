/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put, takeEvery } from 'redux-saga/effects';
import { AnyAction } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
import { LoginDetails } from '../../../utils/interface';
import { loginUserAction, logOutUserAction, registerUserAction, refreshFunction, saveUserAction, setUserDetails } from '../slices/SignInSlice';
import { getUserDetails, getUserService, insertCustomerService } from '../../../services/CustomerServices';
//services and slices


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* loginUser(action: AnyAction): any {
  try {
    const response: boolean = yield call(getUserService, action.payload);
    
    if (response) {
      const userData: LoginDetails = yield call(getUserDetails);
  
      const userDataCookie = cookies.get('userData');
      console.log(userDataCookie);
      yield put(saveUserAction(true));
      yield put(
        setUserDetails({
          userRoll: userDataCookie.userRoll,
          name: userDataCookie.name,
        })
      );
    } else {
      alert('can not find user,check email & password..!');
    }
  } catch (error) {
    alert('can not find user,check email & password..!');
    console.log(error);
  }
}
  
function* logOutUser(): any {
//   try {
//     const response: any = yield call(logoutUserService);
//     if (response) {
//       //yield put(saveUserAction(false));
//       //yield put(setUserDetails([]));
//     }
//   } catch (error) {
//     console.log(error);
//   }
}
  
function* registerUser(action: AnyAction): any {
  try {
    const response = yield call(
      insertCustomerService,
      action.payload
    );
    console.log(response);
    if (response.data===true) {
      const userData: LoginDetails = yield call(getUserDetails);
      console.log(userData);
      const userDataCookie = cookies.get('userData');
      yield put(saveUserAction(true));
      yield put(
        setUserDetails({
          userRoll: userDataCookie.userRoll,
          name: userDataCookie.name,
        })
      );
      // yield put(signUpSuccess(true));
      alert('User Added Successfully!');
    } else {
      alert('User Already Exists!');
    }
  } catch (error) {
    console.log(error);
    alert('Error occurred while registering user');
  }
}


/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* signInSaga() {
  yield takeEvery(loginUserAction, loginUser);
  yield takeEvery(logOutUserAction, logOutUser);
  yield takeEvery(registerUserAction, registerUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

// function* signInSaga() {
//   yield takeLatest(loginUserAction, loginUser);
//   yield takeLatest(logOutUserAction, logOutUser);
//   yield takeLatest(registerUserAction, registerUser);
//   yield takeLatest(refreshFunction, refreshAction);
// }

export default signInSaga;