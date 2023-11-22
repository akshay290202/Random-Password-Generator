const passwordbox = document.getElementById("password");
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "~`!@#$%^&*()_-+={[}]|\:;',<>.?/";
const mixed = "ABCDEFGHI~`!@#$%^&*()_-+={[abcdefghijklmnopqrstuvwxyz}]|\:;',<>.?/JKLMNOPQ0123456789RSTUVWXYZ";

function createpassword() {
    let ans = "";
    ans += uppercase[Math.floor(Math.random() * uppercase.length)];
    ans += lowercase[Math.floor(Math.random() * lowercase.length)];
    ans += num[Math.floor(Math.random() * num.length)];
    ans += symbol[Math.floor(Math.random() * symbol.length)];

    while(ans.length < length){
        ans += mixed[Math.floor(Math.random() * mixed.length)];
    }

    passwordbox.value = ans;
}

function copypassword(){
    passwordbox.select();
    navigator.clipboard.writeText(passwordBox.value);
}

