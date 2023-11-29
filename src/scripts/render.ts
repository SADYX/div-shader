import { Vector2 } from "../classes/Vector2";
import { Vector3 } from "../classes/Vector3";
import { Vector4 } from "../classes/Vector4";
import { fract } from "../utils/math";
import { GUIBOARD } from "./evts";
import { DOM_MAP, SHADER_TYPE_ENUM, SIZE } from "./global";

type FragmentParams = {
    fragCoord: Vector2;
    iTime: number;
    iSamples: number;
}

type FS = (p: FragmentParams) => string;

// inner shader params
const iResolution = new Vector2(SIZE, SIZE);
const iFwidth = 1 / SIZE / 4; // replace "fwidth"

// collection of "fragment shaders"
const gradientColorFS: FS = (params) => {
    const {
        fragCoord,
        iTime,
    } = params;

    // coordinates transform
    const uv = fragCoord.clone().divide(iResolution);

    // get gradient color
    const col = new Vector3(uv.x, uv.y, uv.x)
        .add(new Vector3(0, 2, 4))
        .addFactor(iTime)
        .fn(Math.cos)
        .scale(0.5)
        .addFactor(0.5);
    const fragColor = new Vector4(col.x, col.y, col.z, 1);

    return fragColor.toColor();
}

// https://www.shadertoy.com/view/wl3fRf
const plotFS: FS = (params) => {
    const {
        fragCoord,
        iTime,
        iSamples,
    } = params;
    const samples = iSamples;

    // #define
    const fragColor = new Vector4(0, 0, 0, 1);
    const yScale = 2.5;
    const xScale = 4 / SIZE;

    const fn = (x: number) => {
        return (Math.sin(x * Math.PI * 2 + iTime) + Math.cos(x * Math.PI)) / 2;
    }


    for (let y = -samples; y < samples; y++)
        for (let x = -samples; x < samples; x++) {
            const coord = fragCoord.clone()
                .add(new Vector2(x, y).scale(1 / samples));

            const l1 = Math.round(fn((coord.x - 1) * xScale) * SIZE);
            const l2 = Math.round(fn((coord.x) * xScale) * SIZE);
            const r = yScale * (coord.y - 0.5 * SIZE);

            const pointA = l1 >= r;
            const pointB = l2 <= r;
            const pointC = l2 >= r;
            const pointD = l1 <= r;
            const pointE = Math.abs(Math.round(fn(coord.x * xScale) * SIZE) - yScale * (coord.y - 0.5 * SIZE)) <= 1;

            if ((pointA && pointB) || (pointC && pointD) || pointE) {
                fragColor.r += 1;
                fragColor.g += 1;
                fragColor.b += 1;
            }
        }

    const f = samples * samples * 4;
    fragColor.scale(1 / f);
    fragColor.a = 1;

    return fragColor.toColor();
}

// fragment shader map
const FS_MAP: Record<SHADER_TYPE_ENUM, FS> = {
    [SHADER_TYPE_ENUM['gradient color']]: gradientColorFS,
    [SHADER_TYPE_ENUM['plot']]: plotFS,
    [SHADER_TYPE_ENUM['sphere sdf']]: gradientColorFS,
}

// render to html elements
const render = (time: number, board: GUIBOARD) => {
    const containerDom = document.getElementById('container');
    if (!containerDom) return;
    const {
        type,
        samples,
    } = board;
    const fs = FS_MAP[type];

    for (let i = 1; i <= SIZE; i++) {
        for (let j = 1; j <= SIZE; j++) {
            const name = `${i}-${j}`;
            const block = DOM_MAP.get(name);
            if (!block) return;

            const color = fs({
                fragCoord: new Vector2(i, j),
                iTime: time,
                iSamples: samples,
            });
            block.style.backgroundColor = color;
        }
    }
}

export {
    render,
};