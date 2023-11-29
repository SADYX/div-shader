class Vector2 {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get u() {
        return this.x;
    }

    get v() {
        return this.y;
    }

    get s() {
        return this.x;
    }

    get t() {
        return this.y;
    }

    set u(_v) {
        this.x = _v;
    }

    set v(_v) {
        this.y = _v;
    }

    set s(_v) {
        this.x = _v;
    }

    set t(_v) {
        this.y = _v;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    addFactor(v: number) {
        this.x += v;
        this.y += v;

        return this;
    }

    add(v: Vector2) {
        this.x += v.x;
        this.y += v.y;

        return this;
    }

    sub(v: Vector2) {
        this.x -= v.x;
        this.y -= v.y;

        return this;
    }

    scale(v: number) {
        this.x *= v;
        this.y *= v;

        return this;
    }

    multiply(v: Vector2) {
        this.x *= v.x;
        this.y *= v.y;

        return this;
    }

    divide(v: Vector2) {
        this.x /= v.x;
        this.y /= v.y;

        return this;
    }

    dot(v: Vector2) {
        return this.x * v.x + this.y * v.y;
    }

    cross(v: Vector2) {
        return this.x * v.y - this.y * v.x;
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    getNormal() {
        return this.clone().scale(this.length());
    }

    fn(f: (n: number) => number) {
        this.x = f(this.x);
        this.y = f(this.y);

        return this;
    }

}

export { Vector2 };