type VectorFn = (n: number) => number;

const fract: VectorFn = (n) => {
    return n % 1;
}

export {
    fract,
}