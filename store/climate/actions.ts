import {getClimateData} from "~/store/climate/mappers/climateApi";
import type {I_ClimateData} from "~/models/store/climate/interfaces";

export default {
    A_SET_CLIMATE_CONFIG(context: any): void {
        getClimateData().then((data: I_ClimateData) => context.commit('M_SET_CLIMATE_CONFIG', data))
    }
}