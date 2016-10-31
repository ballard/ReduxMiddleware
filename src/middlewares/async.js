/**
 * Created by ivanlazarev on 31.10.16.
 */
export default function ({ dispatch }) {
    return next => action => {
        // console.log(action);
        if (!action.payload || !action.payload.then) {
            return next(action); // pass to next middleware
        }

        action.payload
            .then(function (responce) {
                // create a new action with old type, but
                // replace the propmise with the responce date
                const newAction = { ...action, payload: responce };  // take all of what action contains and add responce to it
                dispatch(newAction); // run from top of current middleware
            });

        // console.log("we have a propmise", action);

        // next(action); // "next" keyword: send "action" to next middleware in stack
    };
    // equals to:
    // return function (next) {
    //     return function (action) {
    //         console.log(action);
    //     }
    // }

}