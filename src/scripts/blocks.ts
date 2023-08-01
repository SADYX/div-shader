import { DOM_MAP, SIZE } from "./global";

const initBlocks = () => {
    const containerDom = document.getElementById('container');
    if (!containerDom) return; 

    for (let i = 0; i < SIZE; i++) {
        const row = document.createElement('div');
        containerDom.appendChild(row);

        for (let j = 1; j <= SIZE; j++) {
            const block = document.createElement('div');
            const name = `${SIZE - i}-${j}`;
            block.className = name;
            block.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
            row.appendChild(block);
            DOM_MAP.set(name, block);
        }
    }
}


export {
    initBlocks,
}