import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Henry",
        admin: false,
    })

    function handleEvent(event) {
        const name = event.target.name;
        let value = event.target.value;
        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }

        setFormData({
            ...formData,
            [name]: value,
        })

    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);

    }
    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "firstName"
        onChange = { handleEvent }
        value = { formData.firstName }
        /> <
        input type = "text"
        name = "lastName"
        onChange = { handleEvent }
        value = { formData.lastName }
        /> <
        input type = "checkbox"
        name = "admin"
        onChange = { handleEvent }
        checked = { formData.admin }
        / > <
        button type = "submit" > Submit < /button> < /
        form >
    );
}

export default Form;