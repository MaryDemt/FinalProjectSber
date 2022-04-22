import { axiosInstance } from "../../config/axios";
import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../types/personTypes";

const personToken = 'personToken'

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuery =
  ({ email, password, cb }) =>
  async (dispatch) => {
    const response = await axiosInstance.post("signin", {
      email,
      password,
    }).catch(function (error) {
      if (error.response) {
        // console.log(error.response.data);
        // console.log(error.response.status);
        if (error.response.status === 401) {
          alert('Email or password is incorrect!');
        } else if (error.response.status === 404) {
          alert('User with with email do not exists!');
        } else if (error.response.status === 400) {
          alert('Email is incorrect!');
        } else {
          alert(error.response.data.message);
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      return;
    });

    const person = response.data;
    
    
    //localStorage.setItem(personData, person.data.name)

    dispatch(
      signIn({
        ...person.data,
        token: person.token,
      })
    );

    typeof cb === 'function' && cb();
    localStorage.setItem(personToken, person.token);
  };

  export const signUp = (person) => ({
    type: SIGN_UP,
    payload: person,
  });
  
  export const signUpQuery =
    ({ email, password, name, cb }) =>
    async (dispatch) => {
      const response = await axiosInstance.post("signup", {
        email,
        password,
        name,
      }).catch(function (error) {
        if (error.response) {
          // console.log(error.response.data);
          // console.log(error.response.status);
          if (error.response.status === 400) {
            alert('Email or password is incorrect!');
          } else if (error.response.status === 409) {
            alert('User with with email aleready exists!');
          } else {
            alert(error.response.data.message);
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        return;
      });
  
      const person = response.data;
      dispatch(
        signUp({
          ...person.data
        })
      );
      const responseSignIn = await axiosInstance.post('signin', {
        email: person.email,
        password,
      })
      const userSignIn = responseSignIn.data
      dispatch(
        signIn({
          ...userSignIn.data,
          token: userSignIn.token,
        }),
      )
      typeof cb === 'function' && cb()
      localStorage.setItem(personToken, userSignIn.token)
    };

export const signOut = (person) => ({
      type: SIGN_OUT,
      payload: {
        ...person,
        token: '',
      },
}
)