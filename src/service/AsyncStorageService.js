import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Storage key convention (ex. '__recent_search_keywords__')
 */
class AsyncStorageService {
    _prefix = '@ByulByulDongne';

    setItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(
                `${this._prefix}:${key}`,
                JSON.stringify(value)
            );
        } catch (e) {
            console.log(e);
            /**
             * TODO: Error handling
             */
        }
    };

    getItem = async (key) => {
        try {
            const data = await AsyncStorage.getItem(`${this._prefix}:${key}`);
            return JSON.parse(data);
        } catch (error) {
            /**
             * TODO: Error handling
             */
        }
    };

    removeItem = async (key) => {
        try {
            const data = await AsyncStorage.getItem(`${this._prefix}:${key}`);
            if (data) {
                AsyncStorage.removeItem(`${this._prefix}:${key}`);
            }
        } catch (error) {
            /**
             * TODO: Error handling
             */
        }
    };

    clearStore = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            /**
             * TODO: Error handling
             */
        }
    };
}

export default new AsyncStorageService();
