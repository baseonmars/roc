import 'source-map-support/register';

import stripAnsi from 'strip-ansi';
import { isPlainObject, isString } from 'lodash';

/**
 * Returns a string to pad with.
 *
 * @param {number} length - The desired length of the generated string.
 * @param {string} [character=" "] - The character to repat.
 *
 * @returns {string} - A string matching the input.
 */
export function pad(length, character = ' ') {
    return Array(length + 1).join(character);
}

/**
 * Pads a string to a given length with spaces.
 *
 * @param {string} string - The string to be padded.
 * @param {number} length - The desired length of the new string.
 *
 * @returns {string} - A string matching the input.
 */
export function addPadding(string, length) {
    string = string || '';
    return string + pad(length - stripAnsi(string).length);
}

/**
 * Takes a configuration path array and convertes it to a cli flag.
 *
 * @param {string[]} configPaths - The configuration path, a array consiting of properties.
 *
 * @returns {string} - The cli flag to set the given configuration option.
 */
export function toCliFlag(configPaths) {
    // Runtime should be added directly
    if (configPaths[0] === 'runtime') {
        configPaths.shift();
    }
    return '--' + configPaths.join('-');
}

/**
 * Converts an object to a string.
 *
 * @param {Object} object - The object to convert to a string.
 *
 * @returns {string|null} - The converted object or null if the object is empty.
 */
export function getDefaultValue(object) {
    if (Array.isArray(object) && !object.length ||
        isString(object) && !object ||
        isPlainObject(object) && Object.keys(object).length === 0) {
        return null;
    }

    return JSON.stringify(object);
}