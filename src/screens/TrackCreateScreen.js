import '../_mockLocation';
import React, {useEffect, useState, useContext} from 'react';
import { StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';

const TrackCreateScreen = () => {

    const {addLocation} = useContext(LocationContext);
    const [err, setErr] = useState(null); //hata olup olmadığını görüntülemek için

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync ({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location)=> {
                //console.log(location);
                addLocation(location);
            });
        } catch (error)
        { //eğer kullanıcı reddettiyse otomatik olarak catch'e düşer
            setErr(error) //err state'inin değerini güncelleriz.
        }
    };

    useEffect(()=> {
        startWatching();
    }, [] );

    return(
        <SafeAreaView forceInset= {{top: 'always'}}>
            <Text h2> Create a Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    ); 
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;