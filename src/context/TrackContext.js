import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
};

//Backend API'da kayıtlı tüm track'leri getirmesi için action function
const fetchTracks = dispatch => async() => {
    const response = await trackerApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: response.data});
};

//name ve locations property'lerini alıp kaydetmesi için backend API'a göndereceğimiz action function
const createTrack = dispatch => async(name, locations) => {
    //make a request to our api
    await trackerApi.post('/tracks', {name, locations});
};

export const { Provider, Context } = createDataContext(
    trackReducer, 
    {fetchTracks, createTrack},
    []
);