import _ from 'lodash';

export default (obj, iteratee) => {
    const clone = _.clone(obj, true);

    for (const key in clone) {
        const newKey = iteratee(key);

        if (key !== newKey) {
            clone[newKey] = _.clone(clone[key], true);

            delete clone[key];
        }
    }
    return clone;
};
