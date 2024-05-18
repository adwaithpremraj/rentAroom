import axios from "axios";


export const commonApi = async (httpRequest, url, reqBody, reqHeader) => {
  const reqConfig = {
    method: httpRequest,
    url: url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { 'Content-Type': 'application/json' }
  };

  try {
    const result = await axios(reqConfig);
    return result;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};
