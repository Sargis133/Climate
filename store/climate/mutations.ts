import type {I_ClimateData} from "~/models/store/climate/interfaces";

export default {
    M_SET_CLIMATE_CONFIG(state: any, payload: I_ClimateData): void {
        state.climateData = payload
    }
}