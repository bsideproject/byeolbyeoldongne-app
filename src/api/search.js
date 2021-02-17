import api from './index';

export const fetchLocationList = (query) => {
    return api.get(`/location/list?query=${query}`);
};
