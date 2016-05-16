import { isPlainObject } from 'lodash';
import { isValid } from '../index.js';
import infoObject from '../info-object';
import toObject from '../../converters/to-object';

/**
 * Validates an object using a validator.
 *
 * @param {function|RegExp} validator - The validator to use on the elements in the object
 * @return {function} - A function that takes a value and that returns true or false if valid or not.
 */
export default function isObject(validator) {
    return (input, info) => {
        if (info) {
            return infoObject({
                validator,
                converter: () => toObject,
                wrapper: (wrap) => `{${wrap}}`
            });
        }

        if (input === undefined || input === null) {
            return true;
        }

        if (!isPlainObject(input)) {
            return 'Was not an object!';
        }

        if (!validator) {
            return true;
        }

        return Object.keys(input).map((key) => isValid(input[key], validator))
            .reduce((a, b) => a === true && b === true, true);
    };
}
