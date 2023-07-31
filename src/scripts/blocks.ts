const SIZE = 100;


const drawBlocks = (container: HTMLElement) => {
    for (let i = 0; i < SIZE; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for (let j = 1; j <= SIZE; j++) {
            const pixel = document.createElement('div');
            pixel.className = `${SIZE - i}-${j}`;
            pixel.style.backgroundColor = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`
            row.appendChild(pixel);
        }
    }
}

const main = () => {
    const containerDom = document.getElementById('container');
    containerDom && drawBlocks(containerDom);
}

main();