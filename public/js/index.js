
document.addEventListener('click', function (event) {
    if (event.target.id === 'register-link') {
        const loginForm = document.querySelector("#login-form");
        const registerForm = document.querySelector("#register-form");
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
    if (event.target.id === 'login-link') {
        const loginForm = document.querySelector("#login-form");
        const registerForm = document.querySelector("#register-form");
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    }
});

const loginForm = document.querySelector("#login-form");
if (loginForm)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const login = {
            src: 'login',
            username: username.value,
            password: password.value
        }
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {

            if (data.status == 'success') {
                showSpinner()
                setTimeout(() => {
                    hideSpinner()
                    window.location.replace('/');
                }, 1500);
                toast({
                    title: 'Success',
                    message: data.success,
                    type: 'success',
                    duration: 3000
                })
            } else {
                toast({
                    title: 'Error',
                    message: data.error,
                    type: 'error',
                    duration: 3000
                })
            }

        })
    })

const registerForm = document.querySelector("#register-form");
if (registerForm)
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const signup = {
            src: 'signup',
            fullname: fullname.value,
            username: username_register.value,
            password: password_register.value,
            cf_password: cf_password.value
        }
        fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(signup),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            if (data.status == 'success') {
                toast({
                    title: 'Success',
                    message: data.success,
                    type: 'success',
                    duration: 3000
                })
                setTimeout(() => {
                    const loginForm = document.querySelector("#login-form");
                    const registerForm = document.querySelector("#register-form");
                    registerForm.style.display = "none";
                    loginForm.style.display = "block";
                }, 1500);
            } else {
                toast({
                    title: 'Error',
                    message: data.error,
                    type: 'error',
                    duration: 3000
                })
            }

        })
    })

function showSpinner() {
    var spinner = document.createElement("div");
    spinner.classList.add("loader");
    document.body.appendChild(spinner);
}

function hideSpinner() {
    var spinner = document.querySelector(".loader");
    if (spinner) {
        spinner.remove();
    }
}

function toast({ title = '', message = '', type = '', duration = 2000 }) {
    const main = document.querySelector('.toast-zone')

    if (main) {

        const icons = {
            success: 'fa-solid fa-check',
            error: 'fa-solid fa-exclamation',
            warning: 'fa-solid fa-exclamation',
            info: 'fa-solid fa-info',
        }
        const icon = icons[type]

        const delay = (duration / 1000).toFixed(2)
        const toast = document.createElement('div')

        const autoRemoveID = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 300);

        toast.onclick = function (e) {
            if (e.target.closest('.toast-btn')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveID)
            }
        }

        toast.classList.add('notification', `${type}`)
        toast.style.animation = `slideInRight 0.3s ease forwards, fadeOut 0.3s linear ${delay}s forwards`

        toast.innerHTML = `
    <div class="toast-icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast-body">
            <h3 style="font-size: 2rem;">${title}</h3>
            <span>${message}</span>
        </div>
        <div class="toast-btn">
            <i class="fa-solid fa-times"></i>
        </div>
    `
        main.appendChild(toast)
    }
}