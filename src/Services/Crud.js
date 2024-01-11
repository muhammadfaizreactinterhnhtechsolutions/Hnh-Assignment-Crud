// import { AxiosHeaders } from 'axios';
import { Helper, Helpers } from '../Helpers/Helper';
const token = localStorage.getItem("Token")

export const getPosts = async () => {
  try {
    const response = await Helpers.get('/api/curd',
    {
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.code);
    // if(error.response.data.code){
    //     Token();
    // }
  }
};

export const getSinglePost = async (postId) => {
  try {
    const response = await Helper.get(`posts/${postId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.code);
    // if(error.response.data.code){
    //     Token();
    // }
  }
};

// Add a new post
export const addPost = async (postData) => {
  console.log(token);
  try {
    const response = await Helpers.post('/api/curd', postData,{
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.code);
   
  }
};

export const updatePost = async (postId, updatedData) => {
  try {
    const response = await Helper.put(`posts/${postId}`, updatedData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.code);
  
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await Helpers.delete(`api/curd/${postId}`,{
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    console.log(`Post with ID ${postId} deleted.`, response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data.code);
  
  }
};
