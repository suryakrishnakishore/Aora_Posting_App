import { router } from "expo-router";
import { useEffect } from "react";
import { useGloabalContext } from "./GlobalProvider";

export const useAuthRedirect = () =>{
    const { user, isLoading } = useGloabalContext();

    useEffect(() => {
        if(isLoading) return;

        if(!user) {
            router.replace("/sign-in");
        }
    }, []);
}