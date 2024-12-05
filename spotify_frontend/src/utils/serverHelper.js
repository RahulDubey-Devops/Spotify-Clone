import { backendUrl } from "./config";

export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    // route :/signup
    const response = await fetch(backendUrl + route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const formattedResponse = await response.json();
    return formattedResponse;
};

export const
    makeAuthenticatedPOSTRequest = async (route, body) => {
        // route :/signup
        const token= getToken() ;
        const response = await fetch(backendUrl + route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        const formattedResponse = await response.json();
        return formattedResponse;
    };

    const getToken = (cookieName) => {
        const accessToken = document.cookie.replace(
            new RegExp(
                "(?:(?:^|.*;\\s*)" + cookieName.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"
            ),
            "$1"
        );
        return accessToken || null; // Return null if the token is not found
    };
    