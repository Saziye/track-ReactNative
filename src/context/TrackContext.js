import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case value:
            return; 
        default:
            return state;
    }
};

//Backend API'da kayıtlı tüm track'leri getirmesi için action function
const fetchTracks = dispatch => () => {};

//name ve locations property'lerini alıp kaydetmesi için backend API'a göndereceğimiz action function
const createTrack = dispatch => (name, locations) => {
    //make a request to our api
    console.log(name,locations.length);
};

export const { Provider, Context } = createDataContext(
    trackReducer, 
    {fetchTracks, createTrack},
    []
);