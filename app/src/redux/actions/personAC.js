
import { axiosInstance } from "../../config/axios";
import { SIGN_IN, SIGN_UP } from "../types/personTypes";
import { useNavigate, Navigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

// const navigate = useNavigate();

export const signIn = (person) => ({
  type: SIGN_IN,
  payload: person,
});

export const signInQuery =
  ({ email, password, cb }) =>
  async (dispatch) => {
    // const auth = useAuth();

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
    // console.log(response);
    // console.log('token - ' + person.token);
    localStorage['token'] = person.token;

    // auth.setToken(person.token);
    // auth.setUser(loginData.user);

    dispatch(
      signIn({
        ...person.data,
        token: person.token,
      })
    );

    typeof cb === 'function' && cb();
  };

export const signUp = (person) => ({
  type: SIGN_UP,
  payload: person,
});

export const signUpQuery =
  ({ email, password, passwordConfirm, cb }) =>
  async (dispatch) => {
    if (password === passwordConfirm) {
      const response = await axiosInstance.post("signup", {
        email,
        password
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
      console.log(response);
      typeof cb === 'function' && cb();

      // navigate("/signin");
      return <Navigate to="/signin" state={{ from: location }} replace />;

      // const person = response.data;

      // dispatch(
      //   signUp({
      //     ...person.data,
      //     token: person.token,
      //   })
      // );
    } else {
      alert('Passwords are not equal!')
    }
  };