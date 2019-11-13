const toString = Object.prototype.toString;

/**
 * Checks if argument is Object.
 *
 * @param {Any} arg
 * @returns {Boolean}
 */
export const isObject = arg => {
  return toString.call(arg) === '[object Object]';
};

/**
 * Wrap arguments with error.
 *
 * @param {Any} arg
 * @returns {Object}
 */
export const withError = arg => {
  if (isObject(arg)) {
    const { message = '', ...rest } = arg;

    return {
      data: null,
      error: {
        status: true,
        message,
        ...rest
      }
    };
  }

  return {
    data: null,
    error: {
      status: true,
      message: arg
    }
  };
};

/**
 * Wrap data with error status.
 *
 * @param {Any} data
 * @returns {Object}
 */
export const withData = data => {
  return {
    error: false,
    data
  };
};
