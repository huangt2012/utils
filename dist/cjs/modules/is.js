'use strict';

// src/modules/is.ts
function is_object(o) {
    return o !== null && typeof o === 'object' && !Array.isArray(o);
}
function is_number(n) {
    return typeof n === 'number' && isFinite(n);
}

exports.is_number = is_number;
exports.is_object = is_object;
