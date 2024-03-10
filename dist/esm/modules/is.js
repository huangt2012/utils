// src/modules/is.ts
function is_object(o) {
    return o !== null && typeof o === 'object' && !Array.isArray(o);
}
function is_number(n) {
    return typeof n === 'number' && isFinite(n);
}

export { is_number, is_object };
