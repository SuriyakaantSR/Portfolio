const roles = [
    "Python Developer",
    "Full Stack Web Developer",
    "Youtuber",
    "Computer Science and Business Systems Engineer"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    const typing = document.getElementById("typing");
    if (!typing) return;

    const current = roles[i];
    typing.innerText = current.substring(0, j);

    if (!isDeleting) {
        j++;
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        j--;
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }

    setTimeout(type, isDeleting ? 60 : 80);
}

document.addEventListener("DOMContentLoaded", type);
