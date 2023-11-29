class Vector3 {

    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    clone() {
        return new Vector3(this.x, this.y, this.z);
    }

    addFactor(v: number) {
        this.x += v;
        this.y += v;
        this.z += v;

        return this;
    }

    add(v: Vector3) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
    }

    sub(v: Vector3) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;
    }

    scale(v: number) {
        this.x *= v;
        this.y *= v;
        this.z *= v;

        return this;
    }

    multiply(v: Vector3) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;

        return this;
    }

    divide(v: Vector3) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;

        return this;
    }

    dot(v: Vector3) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    getNormal() {
        return this.clone().scale(1 / this.length());
    }

    fn(f: (n: number) => number) {
        this.x = f(this.x);
        this.y = f(this.y);
        this.z = f(this.z);

        return this;
    }

}

export { Vector3 };