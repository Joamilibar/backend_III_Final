import { CustomError } from "./error.utils.js";
import { ERROR_DICTIONARY } from "./error.dictionary.js";

export const throwError = (errorCode, details = {}) => {
    const error = ERROR_DICTIONARY[errorKey];
    if (!error) {
        throw new Error(`Error key "${errorKey}" not found in dictionary.`);
    }
    throw new CustomError(error.code, error.message, details);
};