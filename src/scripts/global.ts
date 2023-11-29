const SIZE = 80;

const DOM_MAP = new Map<string, HTMLDivElement>();

enum SHADER_TYPE_ENUM {
    'gradient color' = 'gradient color',
    'plot' = 'plot',
    'sphere sdf' = 'sphere sdf',
}

export {
    SIZE,
    DOM_MAP,
    SHADER_TYPE_ENUM,
}