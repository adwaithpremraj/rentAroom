import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";


//api for uploading

export const  uploadUserApi = async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/Users`,reqBody,"")
}

//api for login
export const loginApi = async(reqBody)=>{
   return await commonApi ('POST', `${serverUrl}/user`,reqBody,"")
}



// api to upload hostel
export const addHostelAPI=async(reqBody)=>{
   return await commonApi('POST',`${serverUrl}/hostel`,reqBody)
}

// api to getUploadedHostel

export const getUploadedHostelAPI=async()=>{
 return await commonApi('GET',`${serverUrl}/hostel`,"")
}

//api to get a single video from videos
export const getHostelAPI=async(id)=>{
   return await commonApi('GET',`${serverURL}/hostel/${id}`,"")
 }
 

 //razorpay api

 export const payamount = async (amount) => {
   console.log("amount:", amount);

   try {
     const response = await fetch('/api/v1/orders', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Basic ' + btoa(import.meta.env.VITE_KEY_ID+':'+import.meta.env.VITE_SECRET_KEY),
       },
       body: JSON.stringify({
         amount: amount,
         currency: "INR",
         receipt: "order_rcptid_11",
       }),
     });
 
     const order = await response.json();
     console.log("Order created:", order);
     return order;
   } catch (err) {
     console.error("Error creating Razorpay order:", err);
     throw err;
   }
 };
