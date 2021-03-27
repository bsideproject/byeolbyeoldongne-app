import _ from 'lodash';

const renameKeys = (obj, iteratee) => {
    const clone = _.clone(obj, true);

    for (const key in clone) {
        if (_.isPlainObject(clone[key])) {
            clone[key] = renameKeys(clone[key], iteratee);
        }

        const newKey = iteratee(key);

        if (key !== newKey) {
            clone[newKey] = _.clone(clone[key], true);

            delete clone[key];
        }
    }
    return clone;
};

export default renameKeys;
