import Modal from "./Modal";

class Form {
    static init(data, url, formType) {
        const form = document.querySelector('.modal-form')
        let deleteBtn;

        if (formType === 'edit') {
            form.innerHTML = `
                <label for="input-name">Name</label>
                <input type="text" id="input-name" value=${data.first_name}>
                <label for="input-last_name">Last name</label>
                <input type="text" id="input-last_name" value=${data.last_name}>
                <label for="input-email">Email</label>
                <input type="text" id="input-email" value=${data.email}>
                <label for="input-gender">Gender</label>
                <input type="text" id="input-gender" value=${data.gender}>
                <button id="submit-btn">submit</button>
                <button id="delete-btn">delete</button>
            `

            deleteBtn = document.querySelector('#delete-btn')

            deleteBtn.addEventListener('click', (e) => {
                formValues= {
                    id: data.id
                }

                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(formValues)
                }).then(Modal.hide)
            })
        } else {
            form.innerHTML = `
                <label for="input-name">Name</label>
                <input type="text" id="input-name" value="">
                <label for="input-last_name">Last name</label>
                <input type="text" id="input-last_name" value="">
                <label for="input-email">Email</label>
                <input type="text" id="input-email" value="">
                <label for="input-gender">Gender</label>
                <input type="text" id="input-gender" value=""}>
                <button id="submit-btn">submit</button>
                <button id="delete-btn">delete</button>
            `
        }

        const submitBtn = document.querySelector('#submit-btn');
        let formValues = {}

        submitBtn.addEventListener('click', (event) => {
            formValues = {
                id: data.id,
                first_name: document.querySelector('#input-name').value,
                last_name: document.querySelector('#input-last_name').value,
                email: document.querySelector('#input-email').value,
                gender: document.querySelector('#input-gender').value,
            }

            fetch(url, {
                method: `${formType === "edit" ? "PUT" : "POST"}`,
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(formValues)
            }).then(Modal.hide())
        })
        
    }
}

export default Form