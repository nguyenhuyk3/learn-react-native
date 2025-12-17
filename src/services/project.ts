import { AxiosError } from "axios";

import projects from '../features/home/assets/projects.json';
import { ProjectResponse } from "../dtos";
import { ApiErrorResponse } from "../types";

class ProjectService {
    static async getAllProjects(): Promise<ProjectResponse[]> {
        try {
            await new Promise((r) => setTimeout(r, 800));

            return projects as ProjectResponse[];
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
