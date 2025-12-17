import { useEffect, useState } from 'react';

import { storageServices } from '../storages';
import { STORAGE_KEYS } from '../constants';

const useSavedUsername = (setUsername: (v: string) => void) => {
    const [savedUsername, setSavedUsername] = useState<string | null>(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        (async () => {
            const stored = await storageServices.getString(STORAGE_KEYS.USERNAME);

            if (stored) {
                setSavedUsername(stored);
                setUsername(stored);
            }

            setChecking(false);
        })();
    }, []);

    const clearSavedUsername = async () => {
        setSavedUsername(null);

        await storageServices.remove(STORAGE_KEYS.USERNAME);
    };

    return { savedUsername, checking, clearSavedUsername };
};

export default useSavedUsername;
