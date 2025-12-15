import AsyncStorage from '@react-native-async-storage/async-storage';

const storageServices = {
    setString: async (key: string, value: string) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {

        }
    },
    getString: async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);

            return value || null;
        } catch (e) {
            return null;
        }
    },
    remove: async (key: string) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (e) {

        }
    },
};

export default storageServices;