import type {I_ClimateData, I_ClimateState} from "~/models/store/climate/interfaces";

export default {
    getClimateData(state: I_ClimateState): I_ClimateData | {} {
        return state.climateData
    }
}