import {
    LOGIN_SHOW_USER
} from "../constants/types";

const initialstate = {
    users: [
        {
            name: "default",
            username: "a",
            password: "a"
        }
    ]
};

export default (state = initialstate, { type, payload }) => {
    switch (type) {
        case LOGIN_SHOW_USER:
            console.log(state);
            return state;

        default:
            console.clear();
            console.log("default ", state);
            return state;
    }
};
