import { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

function GlobalProvider({ children }) {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const loadToken = async () => {
            try {
                const storedToken = SecureStore.getItemAsync("aora_token");
                if (storedToken) {
                    setToken(storedToken);
                    setisLoggedIn(true);
                    await loadUserFromToken(storedToken);
                }
            }
            catch (err) {
                console.log("Error loading token: ", err);

            }
            finally {
                setisLoading(false);
            }
        }

        loadToken();
    }, []);

    const loadUserFromToken = async (token) => {
        try {
            const res = await api.get("/users/me");
            setUser(res.data);
        } catch (err) {
            console.log("Error loading user from token: ", err);
            logout();
        }
    }

    const logout = async () => {
        setToken(null);
        setUser(null);
        await SecureStore.deleteItemAsync("token");
    };

    const signup = async (username, email, password) => {
        console.log("username: ", username);

        const res = await api.post("/auth/sign-up", {
            username, email, password
        });
        const jwt = res.data.user.token;

        setToken(jwt);
        setUser(res.data.user);

        await SecureStore.setItemAsync("aora_token", jwt);

        return true;
    }

    const signin = async (email, password) => {
        console.log("email: ", email);

        const res = await api.post("/auth/sign-in", {
            email, password
        });

        const jwt = res.data.user.token;

        setToken(jwt);
        setUser(res.data.user);

        await SecureStore.setItemAsync("aora_token", jwt);

        return true;
    }
    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                user,
                token,
                signin,
                signup,
                logout,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;