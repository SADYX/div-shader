const bindEvts = () => {
    // rem size
    const dom = document.getElementById('remSize');
    dom?.addEventListener('input', (e: any) => {
        document.documentElement.style.fontSize = `${e.target.value}px`;
    });
}

export {
    bindEvts
}