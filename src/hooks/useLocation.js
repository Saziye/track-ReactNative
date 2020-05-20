import {useState, useEffect} from 'react';
import {
    Accuracy, 
    requestPermissionsAsync, 
    watchPositionAsync
} from 'expo-location';

export default (callback) => {
    const [err, setErr] = useState(null); //hata olup olmadığını görüntülemek için

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync ({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, 
            /*(location)=> {
                addLocation(location);
                console.log(location);   
            }*/
                callback
            );
        } catch (error)
        { //eğer kullanıcı reddettiyse otomatik olarak catch'e düşer
            setErr(error) //err state'inin değerini güncelleriz.
        }
    };

    useEffect(()=> {
        startWatching();
    }, [] );

    return [err];
};