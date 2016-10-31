/**
 * Created by ivanlazarev on 28.10.16.
 */
import {
    FETCH_USERS
} from  '../actions/types';

// export default function (state = { list : [], test: '' }, action) {
//     switch (action.type) {
//         case FETCH_USERS:
//              state.list.concat(action.payload);
//             return state;
//
//             // return [...state.list, ...action.payload ]; //contacenate array state.list by action.payload
//     }
//
//     return state;

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_USERS:
            console.log(action.payload);
            //debugger
            return [ ...state, ...action.payload.data ]; //contacenate array state.list by action.payload
    }

    return state;
}