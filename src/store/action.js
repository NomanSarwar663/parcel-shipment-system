import customers from '../__mocks__/customers';



const users = customers;

// const validateUsers = (user) => {
//     return (dispatch) => {

//         console.log(user)
//         dispatch({type: "AUTH", payload: user})
//     }
// }



const validateUsers = (u,navigate) => {
    return (dispatch) => {

        let log = false

        const user = users.find(function (profile) {
            return( profile.email === u.email && profile.password === u.password);
        });

        dispatch({ type: "AUTH", payload: user })
        if (user !== undefined) {
            console.log("Called, inside");
            

            localStorage.setItem("user", JSON.stringify(user.id));
            return true 
            
        }
        else {
            return false
        }   

        // if (user) {
        //     localStorage.setItem("user", JSON.stringify(user));
        //     // navigate('/app/dashboard', { replace: true });
        //     return true
        // }
        // else {
        //     false
        // }
        
        // const user = {
        //     id,
        //     name,
        //     phone,
        //     email,
        //     address
        // }
        
    }
}

// export default validateUser;

export {
    validateUsers
};
