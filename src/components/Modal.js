class Modal {
    static show() {
        const modalBackdrop = document.querySelector('.backdrop')
        modalBackdrop.classList.remove('hidden')
        modalBackdrop.style.animation = 'fadein 0.7s'
    }

    static hide() {
        const modalBackdrop = document.querySelector('.backdrop')
        modalBackdrop.style.animation = 'fadeout 0.7s'

        const hider = () => {
            const modalForm = document.querySelector('.modal-form')
            modalBackdrop.classList.add('hidden')
            modalForm.innerHTML = `
                <div class="loader"></div>
            `
        }

        window.setTimeout(hider, 700)
        history.replaceState({page: 1}, "", "/")
    }
}

export default Modal