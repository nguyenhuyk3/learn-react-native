import { create } from 'zustand';

import { ProjectService } from '../services';
import { ProjectResponse } from '../dtos';

type tabs = 'projects' | 'news'

interface ProjectState {
    // State
    projects: ProjectResponse[];
    selectedTab: tabs;
    searchQuery: string;
    error: string | null;
    loading: boolean;

    // Actions
    setProjects: (projects: ProjectResponse[]) => void;
    setSelectedTab: (tab: tabs) => void;
    setSearchQuery: (query: string) => void;
    setError: (error: string | null) => void;
    clearError: () => void;

    fetchProjects: () => Promise<void>;
    // fetchNews: () => Promise<void>;
}


export const useProjectStore = create<ProjectState>((set, get) => ({
    projects: [],
    selectedTab: "projects",
    searchQuery: "",
    error: null,
    loading: false,

    setProjects: (projects) => set({ projects }),
    setSelectedTab: (selectedTab) => set({ selectedTab }),
    setSearchQuery: (searchQuery) => set({ searchQuery }),
    setError: (error) => set({ error }),
    clearError: () => set({ error: null }),

    fetchProjects: async () => {
        set({ loading: true, error: null });

        try {
            const res = await ProjectService.getAllProjects();
            const data = res;

            await new Promise(resolve => setTimeout(resolve, 2000));

            // set({ error: "Có lỗi ở phía máy chủ", loading: false });
            // set({ projects: [], loading: false });
            set({ projects: data, loading: false })
        } catch (err: any) {
            set({ error: err.message });
        }
    },
}));

export default useProjectStore;