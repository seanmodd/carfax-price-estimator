import axios from "axios";

const requestBody = (type, value) => {
  switch (type) {
    case "make":
      let makeData = {
        query: `query{
            getMakes {
              make
              uisMakeUrlName
              __typename
          }
        }`
      }
      return makeData;
  
    case "model": 
      let modelData = {
        query: `query{
            getMakeModels(make: "${value}") {
              make
              model
              uisModelUrlName
              __typename
          }
        }`
      }
      return modelData;

    case "year": 
      let yearData = {
        query: `query{
            getYMMs(make: "${value.make}", model: "${value.model}") { 
              year
              make  
              model    
              __typename  
          }
        }`
      }
      return yearData;

    default:
      break;
  }
}

// API base url
const BASE_URL = "https://www.carfax.com/vrs";

// API call to fetch make data
export const fetchMakes = () => {
  return axios.post(BASE_URL, requestBody("make"))
}

// API call to fetch model data
export const fetchModels = (make) => {
  return axios.post(BASE_URL, requestBody("model", make))
}

// API call to fetch year data
export const fetchYears = (make, model) => {
  console.log('make and models ====>', make, model)
  return axios.post(BASE_URL, requestBody("year", {make: make, model: model}))
}