import { createContext, useContext, useState, useEffect } from "react";

// Create AuthContext
export const AuthContext = createContext(null);

// Custom hook to access AuthContext
export const useAuthContext = () => {
    return useContext(AuthContext);
};

// AuthContextProvider to wrap around your app components
export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    // Effect to synchronize with localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("users");
        if (storedUser) {
            try {
                setAuth(JSON.parse(storedUser));
            } catch (error) {
                console.error("Failed to parse user data from localStorage", error);
                localStorage.removeItem("users");
            }
        }
    }, []);

    // Function to update both state and localStorage
    const updateAuth = (user) => {
        setAuth(user);
        if (user) {
            localStorage.setItem("users", JSON.stringify(user));
        } else {
            localStorage.removeItem("users");
        }
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth: updateAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
