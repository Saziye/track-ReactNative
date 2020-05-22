import {useState, useEffect} from 'react';
import {
    Accuracy, 
    requestPermissionsAsync, 
    watchPositionAsync
} from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null); //hata olup olmadığını görüntülemek için

    useEffect(()=> {

        let subscriber;

        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync ({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, 
                    callback
                );
            } catch (error)
            { //eğer kullanıcı reddettiyse otomatik olarak catch'e düşer
                setErr(error) //err state'inin değerini güncelleriz.
            }
        };

        if (shouldTrack) {
            startWatching();
        } else {
            if(subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return() => {
            if(subscriber) {
                subscriber.remove();
            }
        };

    }, [shouldTrack , callback]);

    return [err];
};