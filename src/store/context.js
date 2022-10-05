import React, { useEffect, useState } from 'react';

export const Authcontext = React.createContext();

export function Contextprovider(props) {
    const [language, setLanguage] = useState("En");
/*
    
    useEffect(() => {

      if(localStorage.getItem("language") !== null){
        setLanguage("En")
      }else{
        setLanguage("Ar")
      }
    }, [language]);
    */
    

    /*wishlist,setWishlist */
    const value = {
        language: language,
        setLanguage: setLanguage,
    }

    return (
        <Authcontext.Provider value={value}>
            {props.children}
        </Authcontext.Provider>
    )
}

