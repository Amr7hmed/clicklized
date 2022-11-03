import React, {  useState } from 'react';

export const Authcontext = React.createContext();

export function Contextprovider(props) {
    const [email, setEmail] = useState("");
    

    /*wishlist,setWishlist */
    const value = {
        email: email,
        setEmail: setEmail,
    }

    return (
        <Authcontext.Provider value={value}>
            {props.children}
        </Authcontext.Provider>
    )
}

