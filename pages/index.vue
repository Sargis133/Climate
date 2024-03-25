<template>
  <div class="main">
    <div class="main__top-content">
      <div class="top-content__gif-box">
        <img
          class="gif-box__gif"
          :src="'/video/' + mainData.climateData.conditions + '.gif'"
          :alt="mainData.climateData.conditions"
        />
      </div>
      <div class="top-content__climate-info-box">
        <div class="climate-info-box__country-info-box">
          <p class="country-info-box__country">
            {{ mainData.climateData.country }}
          </p>
          <p class="country-info-box__time">
            {{ mainData.timeData.time }}
          </p>
        </div>
        <div class="climate-info-box__climate-info">
          <p class="climate-info__title">For 3 hour</p>
          <div class="climate-info__box">
            <span>Temp - </span>
            <p>{{ mainData.climateData.temp }}</p>
          </div>
          <div class="climate-info__box">
            <p>Min - </p>
            <p>{{ mainData.climateData.tempMin }}</p>
          </div>
          <div class="climate-info__box">
            <p>Max - </p>
            <p>{{ mainData.climateData.tempMax }}</p>
          </div>
          <div class="climate-info__box">
            <ui-icons icon-name="sunrise" />
            <p>- {{ mainData.climateData.sunInput }}</p>
          </div>
          <div class="climate-info__box">
            <ui-icons icon-name="sunset" />
            <p>- {{ mainData.climateData.sunOutput }}</p>
          </div>
          <div class="climate-info__box">
            <ui-icons icon-name="wind" />
            <p>- {{ mainData.climateData.wind }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="main__bottom-content">
      <div class="bottom-content__full-day-climate">
        <div
          class="full-day-climate__day-climate-box"
          v-for="day in mainData.climateData.fullDayClimate"
          :key="day.temp"
        >
          <div class="day-climate-box__day-icon-box">
            <img
              :src="'/images/conditions/' + day.icon + '.png'"
              alt="conditions"
              class="day-icon-box__icon"
            />
          </div>
          <div class="day-climate-box__day-climate-descriptions">
            <p class="day-climate-descriptions__title">Time -</p>
            <p class="day-climate-descriptions__text">
              {{ day.time }}
            </p>
            <p class="day-climate-descriptions__title">Temp -</p>
            <p class="day-climate-descriptions__text">{{ day.temp }}</p>
            <p class="day-climate-descriptions__title">Max -</p>
            <p class="day-climate-descriptions__text">{{ day.tempMax }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getTime } from "~/components/templates/index/utils/getTime";
import { sunRiseFunc } from "~/components/templates/index/utils/sunRise";
import { onUpdateClimateApi } from "~/components/templates/index/utils/onUpdateClimateApi";

const { $store } = useNuxtApp();

$store.dispatch("A_SET_CLIMATE_CONFIG");

onMounted(() => {
  getTimeNow();
});
function getTimeNow() {
  setInterval(() => {
    mainData.value.timeData.time = getTime();
    if (onUpdateClimateApi()) $store.dispatch("A_SET_CLIMATE_CONFIG");
  }, 60000);
}
const sunTimes = (sec: number) => sunRiseFunc(sec);

const mainData = ref({
  timeData: {
    time: getTime(),
  },
  climateData: {
    country: "Country",
    temp: "0",
    tempMax: "0",
    tempMin: "0",
    sunInput: "00:00",
    sunOutput: "00:00",
    conditions: "",
    wind: "0.0",
    fullDayClimate: [],
  },
});

const climateData = computed(() => $store.getters.getClimateData);
watch(climateData, (newData) => {
  newData.sunInput = sunTimes(newData.sunInput);
  newData.sunOutput = sunTimes(newData.sunOutput);
  mainData.value.climateData = newData;
});
</script>

<style scoped>
.main {
  width: 700px;
  height: max-content;
  margin: 0 auto;
  box-shadow: 0 0 4px 4px gray;
  border-radius: 20px;
}
.main__top-content {
  position: relative;
  width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-content__gif-box {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
}
.gif-box__gif {
  width: 700px;
  height: 400px;
  border-radius: 20px 20px 0 0;
}
.top-content__climate-info-box {
  width: 90%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  color: whitesmoke;
  font-family: sans-serif;
}
.climate-info__title {
  font-size: 17px;
  font-weight: 500;
  font-family: sans-serif;
}
.climate-info__box {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: pre;
  text-shadow: 0 0 3px black;
}
.main__bottom-content {
  background-color: #BFBFBF;
  padding: 10px 20px;
  border-radius: 0 0 20px 20px;
}
.bottom-content__full-day-climate {
  display: flex;
  column-gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
}
.bottom-content__full-day-climate::-webkit-scrollbar {
  height: 5px;
}
.bottom-content__full-day-climate::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 8px;
}
.bottom-content__full-day-climate::-webkit-scrollbar-track {
  border-radius: 8px;
}
.day-climate-box__day-climate-descriptions {
  display: grid;
  grid-template-columns: auto auto;
}
.day-climate-descriptions__title {
  white-space: pre;
}
.day-climate-box__day-icon-box {
  display: flex;
  justify-content: center;
}
.day-icon-box__icon {
  width: 50px;
}
.full-day-climate__day-climate-box {
  border: 1px solid lightcyan;
  padding: 8px;
  background-color: darkgray;
  border-radius: 8px;
}
</style>
