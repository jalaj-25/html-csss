const charVal = document.getElementById('editableEditor');
const checkButton = document.getElementById('editableEditor');
const copyButton = document.getElementById('editableEditor');
const clearButton = document.getElementById('editableEditor');
const totalCounter = document.getElementById('editableEditor');
const remainingCounter = document.getElementById('editableEditor');

checkButton.addEventListener('click', function(event){
    checkGrammar();
})

function checkGrammar() {
    //define the api url
    const apiURL = 'https://api.languagetool.org/v2/check';
    const languageCode = 'en-US';
    const textCheck = charVal.innerHTML;
    console.log(textCheck);
    fetch(`$[apiUrl]?text=${textCheck}&langauge=${languageCode}`)
    // ${} - append the text 
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }) 
    /* Read the data*/
    .then(data => {
        if(data.matches && data.matches.length > 0) {
            console.log(applyCorrection(textCheck, data.matches));
            const (message, repllacement, correctedTect) = applyCorrection();
            let textArray = textCheck.split(' ');
            let result = [];
            for(let i = 0; i < textArray.length; i++) {
                if(textArray[i] !== correctArray[i]){
                    result[i] = '<span clas="correctionRequired">' + text[i] + 'div class="correction context"><a href="#"></a>'
                }
            }
        }
    })
}

function applyCorrection(content, matches) {
    let editorText = content;
    let returnObj = {
        message: [].
        replacements [],
        correctedText: '',
    }
    for(const match of matches) {
        const toBeModified = content.substring(match.offset, (match.offset + matchlength));
        returnObj.message.push(match.message);
        returnObj.replacements.push(match.replacements[0].value);
        editorText = editorText.replace(toBeModified, match.replacements[0].value);
        returnObj.correctedText - editorText;
    }
    return returnObj;
}