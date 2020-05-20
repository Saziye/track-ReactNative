import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case value:

        default:
            return state;
    }
};

//recording->kullanıcının konum güncellemelerini alıp bir şekilde saklamak istediğimiz anlamına gelir.
//recording flag'ı güncellemek için kullanacağım action function
const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
//yeni bir konum eklemek veya güncellemek için kullanacağım action function
const addLocation = dispatch => () => {};

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation},
    {recording: false, locations: [], currentLocation: null}
);