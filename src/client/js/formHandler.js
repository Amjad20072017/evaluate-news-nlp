// this import is just for formHandler testing
import fetch from 'node-fetch';

function handleSubmit(event) {
    event.preventDefault()
    const formTextValue = document.getElementById('name').value 
    const check = Client.checkForUrl(formTextValue)
    if (check) {
    console.log("::: Form Submitted :::")
     postData('http://localhost:8081/addData', {formText: formTextValue })
    .then(function(data) {
        document.getElementById('results').innerHTML = ' <br> ' + 'polarity: ' + data.polarity + '<br>' + 'polarity_confidence: ' + data.polarity_confidence + '<br>' + 'subjectivity: ' + data.subjectivity + '<br>' + 'subjectivity_confidence: ' + data.subjectivity_confidence + '<br>' + 'text: ' + data.text + '<br>'
    })
    } 
}

  
/* Function to POST data */

const postData = async (url, data) => {
   const res = await fetch (url, {
       method: 'POST',
       credentials: 'same-origin',
       headers: {
           'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
   });
   try {
       const newData = await res.json();
       console.log(newData);
       return newData;
   }
   catch (error) {
       console.log("Error", error);
   }
}


export { handleSubmit }
export { postData }
