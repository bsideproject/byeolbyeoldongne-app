import api from './index';

//http://bbdnserver-env.eba-a4c5kpmb.ap-northeast-2.elasticbeanstalk.com//location/review?placeId=11111

export const fetchReviews = ({ placeId }) => {
    return api.get(`/location/review?placeId=${placeId}`);
};
