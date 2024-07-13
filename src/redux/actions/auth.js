import {
  LOGIN,
  CREATEACCOUNT,
  PASSWORDUPDATE,
  VERIFYEMAIL,
  PASSWORDRESET,
  VALIDATEOTP,
  DELETEACCOUNT,
  INSTALLED,
} from "../../utils/config";
import {
  apiPost,
  clearUserData,
  setUserData,
  apiDelete,
  setUserTempData,
} from "../../utils/utils";
import store from "../store";
import types from "../types";

const { dispatch } = store;

export const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};

export function login(data) {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data)
      .then((res) => {
        setUserData(res)
          .then(() => {
            saveUserData(res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

  export function installed(data) {
    return new Promise((resolve, reject) => {
      apiPost(INSTALLED, data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

export function appLogOut(data) {
  return new Promise((resolve, reject) => {
    apiPost(APPLOGOUT, data)
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function signup(data) {
  return new Promise((resolve, reject) => {
    apiPost(CREATEACCOUNT, data)
      .then((res) => {
        setUserTempData(res)
          .then(() => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function logout() {
  return new Promise((resolve, reject) => {
    dispatch({ type: types.CLEAR_REDUX_STATE });
    clearUserData()
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function register(data) {
  return apiPost(CREATEACCOUNT, data);
}

export function verifyOTP(data) {
  return apiPost(VALIDATEOTP, data);
}

export function validateEmail(data) {
  return apiPost(VERIFYEMAIL, data);
}

export function resetPassword(data) {
  return apiPost(PASSWORDRESET, data);
}

export function profilesetuo(data) {
  return apiPost(PROFILESETUP, data);
}

export function createPost(data) {
  return apiPost(CREATEPOST, data);
}

export function followUser(data) {
  return apiPost(FOLLOWUSER, data);
}

export function unFollowUser(data) {
  return apiPost(UNFOLLOWUSER, data);
}

export function deleteAccount(data = null) {
  return apiPost(DELETEACCOUNT, data);
}

export function updatePassword(data) {
  return apiPost(PASSWORDUPDATE, data);
}

export function bookSession(data) {
  return apiPost(BOOKSESSION, data);
}

export function initiatePayment(data) {
  return apiPost(INITIATEPAYMENT, data);
}

export function createPostComment(data) {
  return apiPost(CREATEPOSTCOMMENT, data);
}

export function likePostComment(data) {
  return apiPost(LIKEPOSTCOMMENT + data);
}

export function dislikePostComment(data) {
  return apiPost(DISLIKEPOSTCOMMENT + data);
}

export function updateProfile(data) {
  return apiPut(PROFILEUPDATE, data);
}

export function setupProfile(data) {
  return apiPut(PROFILESETUP, data);
}

export function joinGroupChat(data) {
  return apiPost(JOINGROUPBYID, data);
}

export function sessionReview(data) {
  return apiPost(SESSIONREVIEW, data);
}

export function likePost(data) {
  return apiPost(LIKEPOST + data);
}

export function unlikePost(data) {
  return apiPost(UNLIKEPOST + data);
}

export function createSpace(data) {
  return apiPost(CREATESPACE, data);
}

export function joinSpace(data) {
  return apiPost(JOINSPACE, data);
}

export function exitSpace(data) {
  return apiPost(EXITSPACE, data);
}