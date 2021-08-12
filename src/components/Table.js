class Table {
    init() {
        // create a <table></table>
        const table = document.createElement("table")
        table.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Gender</th>
            </tr>
            `

        return table;
    }

    row(data) {
        // creates a <tr></tr>
        const row = document.createElement("tr")
        row.id = `${data.id}`

        //create table cells
        row.innerHTML = `
            <td>${data.id}</td>
            <td>${data.first_name}</td>
            <td>${data.last_name}</td>
            <td>${data.email}</td>
            <td>${data.gender}</td>
        `
        return row
    }
}

export default Table;