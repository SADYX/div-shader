type VectorFn = (n: number) => number;

const fract: VectorFn = (n) => {
    return n % 1;
}

const clamp = (n: number, min: number, max: number) => {
    if (n <= min) return min;
    if (n >= max) return max;
    return n;
}

export {
    fract,
    clamp,
}