import AsyncStorage from '@react-native-async-storage/async-storage';

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
}

export default new AsyncStorageService();
