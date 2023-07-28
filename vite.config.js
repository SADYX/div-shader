import { defineConfig } from 'vite';
import { join } from 'path'

export default defineConfig({
    root: join(__dirname, 'src'),
    base: 'div-shader',
});