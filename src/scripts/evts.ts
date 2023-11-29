import * as dat from 'dat.gui';
import { SHADER_TYPE_ENUM } from './global';

type GUIBOARD = {
    'type': SHADER_TYPE_ENUM;
    'block size': number;
    'samples': number;
}

const board: GUIBOARD = {
    'type': SHADER_TYPE_ENUM['gradient color'],
    'block size': 9,
    'samples': 2,
};

const bindEvts = () => {
    const gui = new dat.GUI();

    gui
        .add(board, 'type', [
            SHADER_TYPE_ENUM['gradient color'],
            SHADER_TYPE_ENUM['plot'],
            SHADER_TYPE_ENUM['sphere sdf'],
        ]);

    gui
        .add(board, 'block size', 1, 12, 1)
        .onChange((e) => {
            document.documentElement.style.fontSize = `${e}px`;
        });

    gui
        .add(board, 'samples', 1, 3, 1);
}

export {
    board,
    bindEvts
}

export type {
    GUIBOARD,
}