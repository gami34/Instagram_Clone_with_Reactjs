import React, { createContext, useContext, useState, useEffect } from "react";
import { firebase, firestore } from "../lib/firebase";
// import { seedDatabase } from "../seed";

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [loading, setLoading] = useState(false);

    const store = {
        firebase,
        firestore,
    };
    useEffect(() => {
        setLoading(true);
        /**
         * seedDatabase should only populate firestore just once
         */
        // seedDatabase(firestore);
        setLoading(false);
    }, []);

    return <AppContext.Provider value={store}>{!loading && children}</AppContext.Provider>;
}
export default AppProvider;
