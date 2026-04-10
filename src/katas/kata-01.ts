export function mergeArrays(...arrays) {
    return arrays.reduce((acc, cur) => [...acc, ...cur], []);
}
