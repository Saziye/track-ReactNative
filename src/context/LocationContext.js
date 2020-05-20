import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload};
        default:
            return state;
    }
};

//recording->kullanıcının konum güncellemelerini alıp bir şekilde saklamak istediğimiz anlamına gelir.
//recording flag'ı güncellemek için kullanacağım action function
const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
//yeni bir konum eklemek veya güncellemek için kullanacağım action function
//kullanıcı konumunu her güncellediğinde bu fonks. çağırılır
const addLocation = dispatch => (location) => {
    console.log('HI THERE!');
    dispatch({type: 'add_current_location', payload: location});
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation},
    {recording: false, locations: [], currentLocation: null}
);