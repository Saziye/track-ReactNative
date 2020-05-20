import {useState, useEffect} from 'react';
import {
    Accuracy, 
    requestPermissionsAsync, 
    watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null); //hata olup olmadığını görüntülemek için
    const [subscriber, setSubscriber] = useState(null);

    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync ({
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
            setSubscriber(sub);
        } catch (error)
        { //eğer kullanıcı reddettiyse otomatik olarak catch'e düşer
            setErr(error) //err state'inin değerini güncelleriz.
        }
    };

    useEffect(()=> {
        if (shouldTrack) {
            startWatching();
        } else {
            subscriber.remove();
            setSubscriber(null);
        }
    }, [shouldTrack] );

    return [err];
};