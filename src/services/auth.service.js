import axios from "axios";

export const login = (data, callback) => {
    axios
        .post("http://localhost:45678/login", data)
        .then((res) => {
            callback(true, res);
        })
        .catch((error) => {
            callback(false, error); 
        });
}