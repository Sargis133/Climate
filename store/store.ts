import {createStore} from "vuex";
import climate from "./climate/store";
export const store: any = createStore({
    modules: {
        climate,
    }
})