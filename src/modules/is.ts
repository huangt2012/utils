// src/modules/is.ts
function is_object(o: any): o is Exclude<object, Array<any>> {
    return o !== null && typeof o === 'object' && !Array.isArray(o)
}

function is_number(n: any): n is number {
    return typeof n === 'number' && isFinite(n)
}

export {
    is_object,
    is_number,
}
