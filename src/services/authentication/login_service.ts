import { AxiosError } from "axios";

import apiClient from "../../configs/api";
import { LoginRequest, LoginResponse } from "../../dtos/authentication";
import { ApiErrorResponse } from "../../types";

class LoginService {
    static async login(req: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await apiClient.post<LoginResponse>(
                '/Auth/loginhome',
                req
            );

            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError<ApiErrorResponse>;
            
            if (axiosError.response?.data) {
                throw new Error(axiosError.response.data.detail || axiosError.response.data.error);
            }

            throw new Error('Không thể kết nối đến server');
        }
    }

};

export default LoginService;
