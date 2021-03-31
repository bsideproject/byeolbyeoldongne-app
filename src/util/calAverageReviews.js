import { round } from 'lodash';
import review from '../store/review';

export default (reviews) => {
    if (!reviews || !reviews.length) return 0;

    const total = reviews.reduce((acc, review) => {
        const {
            trafficPoint,
            conveniencePoint,
            noisePoint,
            safetyPoint,
        } = review;
        return acc + trafficPoint + conveniencePoint + noisePoint + safetyPoint;
    }, 0);

    return round(total / (reviews.length * 4), 3);
};
