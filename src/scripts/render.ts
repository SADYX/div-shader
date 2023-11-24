import { Vector2 } from "../classes/Vector2";
import { Vector3 } from "../classes/Vector3";
import { Vector4 } from "../classes/Vector4";
import { DOM_MAP, SIZE } from "./global";

type FragmentParams = {
    fragCoord: Vector2;
    iTime: number;
}

// inner shader params
const iResolution = new Vector2(SIZE, SIZE);

// "fragment shader"
const getBlockColor = (
    params: FragmentParams,
) => {
    const {
        fragCoord,
        iTime,
    } = params;

    // coordinates transform
    const uv = fragCoord.clone().divide(iResolution);
    const col = new Vector3(uv.x, uv.y, uv.x)
        .add(new Vector3(0, 2, 4))
        .addFactor(iTime)
        .fn(Math.cos)
        .scale(0.5)
        .addFactor(0.5);
    const fragColor = new Vector4(col.x, col.y, col.z, 1);

    return fragColor.toColor();
}

const render = (time: number) => {
    const containerDom = document.getElementById('container');
    if (!containerDom) return;

    for (let i = 1; i <= SIZE; i++) {
        for (let j = 1; j <= SIZE; j++) {
            const name = `${i}-${j}`;
            const block = DOM_MAP.get(name);
            if (!block) return;

            const color = getBlockColor({
                fragCoord: new Vector2(i, j),
                iTime: time,
            });
            block.style.backgroundColor = color;
        }
    }
}

export {
    render,
};