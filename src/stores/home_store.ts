import { create } from 'zustand';

import { NewsResponse, ProjectResponse } from '../dtos';
import { ProjectService } from '../services';

type tabs = 'projects' | 'news'

interface HomeState {
    // State
    projects: ProjectResponse[];
    allNews: NewsResponse[];
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
    fetchAllNews: () => Promise<void>;
}


export const useHomeStore = create<HomeState>((set, get) => ({
    projects: [],
    allNews: [],
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
        const { projects } = get();

        if (projects.length === 0) {
            set({ loading: true, error: null });

            try {
                const res = await ProjectService.getAllProjects();
                const data = res;

                await new Promise(resolve => setTimeout(resolve, 2000));

                // set({ error: "Có lỗi ở phía máy chủ", loading: false });
                // set({ projects: [], loading: false });
                set({ projects: data, loading: false });
            } catch (err: any) {
                set({ error: err.message });
            }
        }
        set({ loading: false });
    },
    fetchAllNews: async () => {
        const { allNews } = get();

        if (allNews.length === 0) {
            set({ loading: true, error: null });

            try {
                const res = await ProjectService.getAllNews();
                const data = res;

                await new Promise(resolve => setTimeout(resolve, 2000));

                // set({ error: "Có lỗi ở phía máy chủ", loading: false });
                // set({ allNews: [], loading: false });
                set({ allNews: data, loading: false });
            } catch (err: any) {
                set({ error: err.message });
            }
        }

        set({ loading: false });
    }
}));

export default useHomeStore;