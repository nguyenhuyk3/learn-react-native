import { create } from 'zustand';

export interface ForgotPasswordFormData {
    username: string;
    registeredEmail: string;
}

interface ForgotPasswordState {
    error: string | null;

    setError: (error: string | null) => void;
    sendOtp: (data: ForgotPasswordFormData) => Promise<void>;
}

const useForgotPasswordStore = create<ForgotPasswordState>((set) => ({
    error: null,

    setError: (error) => set({ error }),
    sendOtp: async (data) => {
        console.log(data);
    },
}));

export default useForgotPasswordStore;
