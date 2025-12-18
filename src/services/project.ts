import { AxiosError } from "axios";

import projects from '../features/home/assets/projects.json';
import allNews from '../features/home/assets/all_news.json';
import { NewsResponse, ProjectResponse } from "../dtos";
import { ApiErrorResponse } from "../types";

class ProjectService {
    static async getAllProjects(): Promise<ProjectResponse[]> {
        try {
            return projects as ProjectResponse[];
        } catch (error) {
            const axiosError = error as AxiosError<ApiErrorResponse>;

            if (axiosError.response?.data) {
                throw new Error(axiosError.response.data.detail || axiosError.response.data.error);
            }

            throw new Error('Không thể kết nối đến server');
        }
    }
    static async getAllNews(): Promise<NewsResponse[]> {
        try {
            return allNews as NewsResponse[];
        } catch (error) {
            const axiosError = error as AxiosError<ApiErrorResponse>;

            if (axiosError.response?.data) {
                throw new Error(axiosError.response.data.detail || axiosError.response.data.error);
            }

            throw new Error('Không thể kết nối đến server');
        }
    }
};

export default ProjectService;
