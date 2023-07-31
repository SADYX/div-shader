
const bindEvts = () => {
    const dom = document.getElementById('remSize');
    dom?.addEventListener('input', (e: any) => {
        console.log(e?.target?.value);
    });
}

bindEvts();