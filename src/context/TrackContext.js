import createDataContext from './createDataContext';

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
const createTrack = dispatch => () => {};

export const { Provider, Context } = createDataContext(
    trackReducer, 
    {fetchTracks, createTrack},
    []
);