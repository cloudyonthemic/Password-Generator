document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('passwordForm');
    const generatedPasswordInput = document.getElementById('generatedPassword');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const length = document.getElementById('length').value;
        const lowercase = document.getElementById('lowercase').checked;
        const uppercase = document.getElementById('uppercase').checked;
        const numbers = document.getElementById('numbers').checked;
        const symbols = document.getElementById('symbols').checked;

        const password = generatePassword(length, lowercase, uppercase, numbers, symbols);
        generatedPasswordInput.value = password;
    });
});

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    let chars = '';
    if (lowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) chars += '0123456789';
    if (symbols) chars += '!@#$%^&*()-_=+[{]}|;:,<.>/?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

function copyPassword() {
    var copyText = document.getElementById("generatedPassword");
    if (copyText.value !== "") {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        alert("Password Copied to Clipboard");
    } else {
        alert("Generate a password first");
    }
}
