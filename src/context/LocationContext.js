import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return {...state, currentLocation: action.payload};
        case 'start_recording':
            return {...state, recording: true};
        case 'stop_recording':
            return {...state, recording: false};
        case 'add_location':
            return {...state, locations: [...state.locations, action.payload]};
        case 'change_name':
            return {...state, name: action.payload};
        default:
            return state;
    }
};

//kullanıcı kayıt adını her değiştirdiğinde
const changeName = dispatch => (name)=> {
    dispatch({type: 'change_name', payload: name});
};


//recording->kullanıcının konum güncellemelerini alıp bir şekilde saklamak istediğimiz anlamına gelir.
//recording flag'ı güncellemek için kullanacağım action function

//kayıt başladığında recording false'dan true'ya döner
const startRecording = dispatch => () => {
    dispatch({type: 'start_recording'});
};

//kayıt durduğunda recording false'a döner
const stopRecording = dispatch => () => {
    dispatch({type: 'stop_recording'});
};


//yeni bir konum eklemek veya güncellemek için kullanacağım action function
//kullanıcı konumunu her güncellediğinde bu fonks. çağırılır
const addLocation = dispatch => (location,recording) => {
    //console.log('HI THERE!');
    dispatch({type: 'add_current_location', payload: location}); //mevcut konumu günceller
    if(recording) { //eğer kayıt varsa konumları locations dizisine ekler
        dispatch({type: 'add_location', payload: location});
    }
};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation, changeName},
    {name: '', recording: false, locations: [], currentLocation: null}
);