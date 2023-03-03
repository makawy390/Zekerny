
import axios from "axios";
 import { isLoading } from "../data/action";  
 import store from "../data/store";
export const axiosInstance = axios.create({
    baseURL : "https://raw.githubusercontent.com/rn0x/Quran-Json/main/Quran.json"
});
export const  azkarMassa = axios.create({
    baseURL : "https://ahegazy.github.io/muslimKit/json/azkar_massa.json"
})
export const  azkarSabah = axios.create({
    baseURL : "https://ahegazy.github.io/muslimKit/json/azkar_sabah.json"
})
export const  afterPrayer = axios.create({
    baseURL : "https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json"
})
export const audioQuran = axios.create({
    baseURL : 'https://api.quran.com/api/v4/chapter_recitations/1?language=ar'

});
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
export const prayerApi = axios.create({
    baseURL : `https://api.aladhan.com/v1/timingsByAddress/${day}-${month+1}-${year}?address=cairo&method=8`
})

export const axiosAzkar = axios.create({
    baseURL: "https://github.com/osamayy/azkar-db/blob/master/azkar.json"
})

// request function
axiosInstance.interceptors.request.use((config)=>{
    store.dispatch(isLoading(true))
    return config;
}, (error)=>{
    return Promise.reject(error)
}
)

// response function
axiosInstance.interceptors.response.use((response)=>{
    store.dispatch(isLoading(false))

    return response;
}, (error)=>{
    return Promise.reject(error)
}
)
// request function
audioQuran.interceptors.request.use((config)=>{
    store.dispatch(isLoading(true))
    return config;
}, (error)=>{
    return Promise.reject(error)
}
)

// response function
audioQuran.interceptors.response.use((response)=>{
    store.dispatch(isLoading(false))

    return response;
}, (error)=>{
    return Promise.reject(error)
}
)

