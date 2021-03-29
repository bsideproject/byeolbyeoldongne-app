import api from './index';

/**
 * 검색어로 조회
 * http://bbdnserver-env.eba-a4c5kpmb.ap-northeast-2.elasticbeanstalk.com/location/list/place?query={search keyword}
 * 좌표로 조회
 * http://bbdnserver-env.eba-a4c5kpmb.ap-northeast-2.elasticbeanstalk.com/location/position?lat=37.4802164414085&lng=126.91255503749
 */
export const fetchLocationList = (query) => {
    console.log(`/location/list/place?query=${query}`);
    return api.get(`/location/list/place?query=${query}`);
};

export const fetchLocationByPosition = ({ latitude, longitude }) => {
    return api.get(`/location/position?lat=${latitude}&lng=${longitude}`);
};
