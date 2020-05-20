import '../_mockLocation';
import React, {useContext} from 'react';
import { StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView, withNavigationFocus} from 'react-navigation';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {

    const {addLocation} = useContext(LocationContext);

    //const [err] = useLocation((location) => addLocation(location));
    const [err] = useLocation(addLocation);

    //console.log(isFocused); //ekrandan ayrıldığında isFocused değeri false olur. Ekrandayken true olur.

    return(
        <SafeAreaView forceInset= {{top: 'always'}}>
            <Text h2> Create a Track</Text>
            <Map/>
            {/* <NavigationEvents onWillBlur= {()=> console.log('LEAVING')} /> */}
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);