export const CHANGE_ROUTER = 'route/CHANGE_ROUTER';

export const changeRouter = payload => ({ type: CHANGE_ROUTER, payload });

const initialState = {
    router: [{
        state: 'v1',
        title: 'Home',
        url: '/'
    }, {
        state: 'v2',
        title: 'About',
        url: '/about'
    }],
    state: 'v1',
    title: 'Home',
    url: '/'
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_ROUTER: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}