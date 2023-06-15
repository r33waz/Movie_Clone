import axios from "axios"

const BASE_URL = "http://localhost:8081/api/v1/"

export const postData = async(url: any, data: any) => {
    const response = await axios.post(BASE_URL + url, data)
    return response
}

export const getData = async (url: any,data:any) => {
  const response = await axios.get(BASE_URL + url,data);
  return response;
};

