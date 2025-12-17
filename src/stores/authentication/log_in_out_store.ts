import { create } from 'zustand';

import { STORAGE_KEYS } from '../../constants';
import { storageServices } from '../../storages';
import LoginService from '../../services/authentication/login_service';
import { LoginRequest } from '../../dtos/authentication';

interface LogInOutState {
    username: string;
    password: string;
    rememberMe: boolean;
    isLoading: boolean;
    error: string | null;
    showErrorModal: boolean;
    showLogoutModal: boolean;

    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    setRememberMe: (rememberMe: boolean) => void;
    clearError: () => void;
    login: () => Promise<boolean>;
    logout: () => Promise<boolean>;
}

const useLogInOutStore = create<LogInOutState>((set, get) => ({
    username: '',
    password: '',
    rememberMe: false,
    isLoading: false,
    error: null,
    showErrorModal: false,
    showLogoutModal: false,

    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
    setRememberMe: (rememberMe) => set({ rememberMe }),
    clearError: () => set({
        error: null,
        showErrorModal: false
    }),
    login: async (): Promise<boolean> => {
        const { username, password, rememberMe } = get();

        if (!username.trim()) {
            set({
                error: "Vui lòng nhập tên đăng nhập",
                showErrorModal: true
            });

            return false;
        }

        if (!password.trim()) {
            set({
                error: "Vui lòng nhập mật khẩu",
                showErrorModal: true
            });

            return false;
        }

        set({ isLoading: true, error: null, showErrorModal: false });

        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            const req: LoginRequest = { username, password };
            const res = await LoginService.login(req);

            await Promise.all([
                storageServices.setString(STORAGE_KEYS.ACCESS_TOKEN, res.accessToken),
                storageServices.setString(STORAGE_KEYS.REFRESH_TOKEN, res.refreshToken),
                storageServices.setString(STORAGE_KEYS.USERNAME, res.username),
                storageServices.setString(STORAGE_KEYS.ROLE, res.role),
            ]);

            // Xử lý remember me
            await (rememberMe
                ? storageServices.setString(STORAGE_KEYS.REMEMBER_ME, STORAGE_KEYS.REMEMBER_ME)
                : storageServices.remove(STORAGE_KEYS.REMEMBER_ME));

            set({
                username: '',
                password: '',
                isLoading: false,
                error: null,
            });

            return true;
        } catch (err: any) {
            set({
                error: err.message,
                showErrorModal: true
            });

            return false;
        } finally {
            set({ isLoading: false });
        }
    },
    logout: async (): Promise<boolean> => {
        set({ isLoading: true, error: null, showLogoutModal: true });

        await Promise.all([
            storageServices.remove(STORAGE_KEYS.ACCESS_TOKEN),
            storageServices.remove(STORAGE_KEYS.REFRESH_TOKEN),
            storageServices.remove(STORAGE_KEYS.ROLE),
        ]);
        await new Promise(resolve => setTimeout(resolve, 2000));

        set({ isLoading: false });

        return true;
    }
}));

export default useLogInOutStore;
