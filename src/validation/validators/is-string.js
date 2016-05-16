import { isString as isStringLodash } from 'lodash';
import infoObject from '../info-object';
import toString from '../../converters/to-string';

/**
 * Validates an string.
 *
 * @param {object} value - Something to validate.
 * @param {boolean} info - If type information should be returned.
 * @return {infoObject|boolean|string} - Type information or if it is valid.
 */
export default function isString(value, info) {
    if (info) {
        return infoObject({
            validator: 'String',
            converter: () => toString
        });
    }

    if (value !== undefined && value !== null && !isStringLodash(value)) {
        return 'Was not a string!';
    }

    return true;
}
