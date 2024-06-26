
// let xhttp = new XMLHttpRequest();
// let url = "first.json";

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data));

// xhttp.load = function () {
//     if (this.status == 200 && this.readyState == 4) {
//         document.getElementById("content").innerHTML = this.responseText;
//     }
// };

// xhttp.open("GET", url, true);
// xhttp.send();

// ====> password checker 

let allowesPasswords = ["123", "456", "111"];

let login = (password) => {
    return allowesPasswords.includes(password);
}

let checkPassword = password => {
    return new Promise((res, rej) => {
        if (login(password))
            res(pass => true);
        else
            rej(pass => false);
    });
}

let checkPasswords = allowesPasswords => {
    allowesPasswords.forEach(pass => {
        checkPassword(pass)
            .then(check => {
                console.log(`valid ${pass}`);
            }).catch(error => {
                console.log(`invalid ${pass}`);
            });
    })
}


let testList = ["111", "237", "853", "123"];
checkPasswords(testList);



