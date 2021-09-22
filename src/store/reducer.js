import customers from '../__mocks__/customers';

const INITIAL_STATE = {
    profile: {
        email: 'abc@gmail.com',
        userName: "Katarina Smith",
        password: 123,
        post: "Senior Developer"
    },

    profiles: customers,
    User: {}
}


const reducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {

        case "AUTH" :
            return {
                ...state,
                User: action.payload
            }
            case "OK" :
            return {
                ...state,
                User: action.payload
            }
        // case "AUTH":
        //     return {
        //         ...state,
        //         User: state.profiles.find((profile) => {
        //             profile.email == action.payload.email && profile.password == action.payload.password
        //             console.log(action.payload)
        //             if (state.User !== null) {
        //                 localStorage.setItem("user", JSON.stringify(state.User));
        //                 return true
        //             }
        //             else {
        //                 false
        //             }
        //         })
        //     }


        // case "AUTH":
        //     console.log("sir")
        //     return {
        //         ...state,
        //         User: () => {

        //             const user = INITIAL_STATE.profiles.find(function (profile) {
        //                 return profile.email === action.payload.email && profile.password === action.payload.password
        //             });
        //             console.log(user)
        //             if (user  ) {
        //                 console.log(action.payload);

        //                 localStorage.setItem("user", JSON.stringify(user));
        //                 console.log(true)
        //             }
        //             else {
        //                 false
        //             }
        //         }
        //     }
        default:
            return state
    }

    


}

export default reducer;






// const validateUser = (userInfo = {email: "ekaterina.tankova@devias.io", password:"123" } ) => {

//     const user = INITIAL_STATE.profiles.find(function(profile) {
//         return profile.email === userInfo.email && profile.password === userInfo.password;
//     });
//     if (user !== null) {
//         console.log("Called, inside");

//         localStorage.setItem("user", JSON.stringify(user));
//         return true
//     }
//     else {
//         false
//     }
// }

// export default validateUser;
