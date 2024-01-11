import { Helpers } from "../Helpers/Helper";

export const Register1 = async (RegisterData) => {
    try {
        const response = await Helpers.post("/api/register" ,RegisterData,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}
export const LoginApi = async (LoginData) => {
    try {
        const response = await Helpers.post("/api/login" ,LoginData,{
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}