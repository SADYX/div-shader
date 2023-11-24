import { initBlocks } from './blocks';
import { bindEvts } from './evts';
import { render } from './render';

bindEvts();
initBlocks();

const animate = () => {
    const timer = requestAnimationFrame(animate);
    render(timer * 0.1);
}

animate();

