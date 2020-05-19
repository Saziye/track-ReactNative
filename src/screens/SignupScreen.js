import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const {state, signup,clearErrorMessage,tryLocalSignin} = useContext(AuthContext);

    //console.log(state);

    useEffect(()=> {
        tryLocalSignin();
    }, []);

    return (
        <View style={styles.container}>
            <NavigationEvents
                // onWillFocus = {() => {}}
                // onDidFocus = {() => {}}
                // onDidBlur = {() => {}}
                onWillBlur = {clearErrorMessage} 
            />
            <AuthForm
                headerText = "Sign Up for Tracker"
                errorMessage = {state.errorMessage}
                submitButtonText = "Sign Up"
                onSubmit = {signup}
            />
            <NavLink
                routeName = "Signin"
                text = "Already have an account? Sign in instead?"
            />
        </View> 
    );
};

// SignupScreen.navigationOptions = {
//     headerShown:false
// };

SignupScreen.navigationOptions = () =>{
    return {
        headerShown:false  //===header:null
    };
};



const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex:1,
        justifyContent: 'center',
        marginBottom:250
    }
    
});

export default SignupScreen;