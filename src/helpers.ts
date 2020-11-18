const handleImgOnLoad = () => {
    var element = document.querySelector("#root > div") as HTMLElement;
    if (!element) {
        console.log('No background element found')
        return;
    }
    element.classList.remove('faded');
    // element.style.opacity = '1';
}

const siteUrl = 'http://mangoalleywebsite.s3-website.eu-west-2.amazonaws.com'

export const helpers = {
    handleImgOnLoad,
    siteUrl
}