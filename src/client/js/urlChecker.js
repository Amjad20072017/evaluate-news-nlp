function checkForUrl(inputUrl) {
    let check;
    console.log("::: Running checkForUrl :::", inputUrl);
    const regex = /((https?\:\/\/)|(www\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/g;
    if(inputUrl.match(regex)){
        check = true;
    }else{
        alert("Url is wrong .. please enter a correct url");
        check = false;
        document.getElementById('name').value = ""
    }
    return check;
}

export { checkForUrl }
    
    