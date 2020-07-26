const handleImgOnLoad = () => {
    var element = document.querySelector("#root > div") as HTMLElement;
    if (!element) {
        console.log('No background element found')
        return;
    }
    element.classList.remove('faded');
    // element.style.opacity = '1';
}

export const helpers = {
    handleImgOnLoad
}