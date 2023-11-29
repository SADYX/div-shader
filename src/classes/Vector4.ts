class Vector4 {

    x: number;
    y: number;
    z: number;
    w: number;

    constructor(x: number, y: number, z: number, w: number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    get r() {
        return this.x;
    }

    get b() {
        return this.y;
    }

    get g() {
        return this.z;
    }

    get a() {
        return this.w;
    }

    set r(v) {
        this.x = v;
    }

    set b(v) {
        this.y = v;
    }

    set g(v) {
        this.z = v;
    }

    set a(v) {
        this.w = v;
    }


    clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
    }

    addFactor(v: number) {
        this.x += v;
        this.y += v;
        this.z += v;
        this.w += v;

        return this;
    }

    add(v: Vector4) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        this.w += v.w;

        return this;
    }

    sub(v: Vector4) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        this.w -= v.w;

        return this;
    }

    scale(v: number) {
        this.x *= v;
        this.y *= v;
        this.z *= v;
        this.w *= v;

        return this;
    }

    multiply(v: Vector4) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        this.w *= v.w;

        return this;
    }

    divide(v: Vector4) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        this.w /= v.w;

        return this;
    }

    dot(v: Vector4) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    }

    getNormal() {
        return this.clone().scale(this.length());
    }

    fn(f: (n: number) => number) {
        this.x = f(this.x);
        this.y = f(this.y);
        this.z = f(this.z);
        this.w = f(this.w);

        return this;
    }

    toColor() {
        return `rgba(${this.x * 255}, ${this.y * 255}, ${this.z * 255}, ${this.w})`;
    }

}

export { Vector4 };