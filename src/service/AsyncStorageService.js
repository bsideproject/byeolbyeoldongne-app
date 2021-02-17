import { AsyncStorage } from 'react-native';

class AsyncStorageService {
    _prefix = '@ByulByulDongne';

    setItem = async (key, value) => {
        try {
            await AsyncStorage.setItem(
                `${this._prefix}:${key}`,
                value.toString()
            );
        } catch (e) {
            /**
             * TODO: Error handling
             */
        }
    };
    getItem = async () => {
        try {
            return await AsyncStorage.getItem('TASKS');
        } catch (error) {
            /**
             * TODO: Error handling
             */
        }
    };
}

export default new AsyncStorageService();
