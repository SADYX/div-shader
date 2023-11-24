import * as dat from 'dat.gui';

const bindEvts = () => {
    // gui
    const board = {
        'block size': 9,
    };

    const gui = new dat.GUI();

    gui
        .add(board, 'block size', 1, 12, 1)
        .onChange((e) => {
            document.documentElement.style.fontSize = `${e}px`;
        })
}

export {
    bindEvts
}