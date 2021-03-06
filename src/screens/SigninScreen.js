import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context);

    return(
        <View style={styles.container}> 
            <NavigationEvents
                // onWillFocus = {() => {}}
                // onDidFocus = {() => {}}
                // onDidBlur = {() => {}}
                onWillBlur = {clearErrorMessage}               
            />
            <AuthForm
                headerText = "Sign In to Your Account "
                errorMessage = {state.errorMessage}
                onSubmit = {signin}
                submitButtonText = "Sign In"
            />
            <NavLink 
                text = "Dont have an account? Sign up instead."
                routeName = "Signup"
            />
        </View>
    ); 
};

SigninScreen.navigationOptions = {
    headerShown: false  //===header:null
};

const styles = StyleSheet.create({
    container: {
        // borderColor: 'red',
        // borderWidth: 10,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    }
});

export default SigninScreen;