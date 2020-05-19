import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async() => {
    const token = await AsyncStorage.getItem('token');
    if(token) { //eğer token varsa 
        dispatch({
            type:'signin',
            payload: 'token'
        });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'clear_error_message'
    });
};

// kaydolmaya çalıştığımızda, kullanıcının kaydolmaya çalıştığı e-posta ve şifreyi geçeriz
const signup = dispatch => async ({email,password}) => {
    //make api request to sign up with that email and password
    //if we sign up(we then get back jwt), modify our state(manage by our authReducer), and say that we are authentication
    //if signing up fails, we probably need reflect an error message
    try {
        const response = await trackerApi.post('/signup',{email,password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signin', 
            payload: response.data.token
        });
        //navigate to mainflow
        navigate('TrackList');
        
    } catch(err) {
        dispatch({
            type:'add_error', 
            payload:'Something went wrong with signup'
        });
    }
};

const signin = (dispatch) => async ({email,password}) => {
    try {
        const response = await trackerApi.post('/signin', {email,password})
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signin',
            payload: response.data.token
        });
        navigate('TrackList');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sigin.'
        });
    }
};

const signout = (dispatch) => {
    return () => {
    //somehow sign out!!

    };
};


export const {Provider,Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);