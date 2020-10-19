; function audioDescribe(lang = 'en-US') {
    if(!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)){
        console.error('This browser doesn\'t support speechSynthesis.');
        return;
    }

    let describedElements = document.querySelectorAll(`[aria-label]:not([aria-label=""]), [aria-labelledby]:not([aria-labelledby=""]), [aria-describedby]:not([aria-describedby=""]), input[id]:not([id=""]), select[id]:not([id=""]), textarea[id]:not([id=""])`);
    let speechLang = lang;

    for (const element of describedElements) {
        element.onfocus = () => { readMeNow(element) };
    }

    function readMeNow(element) {
        speechSynthesis.cancel();

        let text = getElementDescription(element);

        let message = new SpeechSynthesisUtterance(text);
        message.lang = speechLang;

        speechSynthesis.speak(message);
    }

    function getElementDescription(element) {
        let label = element.getAttribute('aria-label');
        let labelledby = element.getAttribute('aria-labelledby');
        let describedby = element.getAttribute('aria-describedby');
        let id = element.getAttribute('id');

        if(label)
        {
            return label;
        }
        else if(labelledby)
        {
            return (document.getElementById(labelledby)).getAttribute('aria-label');
        }
        else if(describedby)
        {
            return (document.getElementById(describedby)).textContent;
        }
        else if(id)
        {
            return (document.querySelector(`[for=${id}]`)).textContent;
        }

        return '';
    }
}

audioDescribe();
