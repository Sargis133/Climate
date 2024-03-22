import {getClimateData} from "~/store/climate/mappers/climateApi";

export default {
    A_SET_CLIMATE_CONFIG(context: any): void {
        getClimateData().then(data => context.commit('M_SET_CLIMATE_CONFIG', data))
    }
}