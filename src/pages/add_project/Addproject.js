import React from 'react'

const Addproject = () => {
    return (
        <div className="main-add-2">
            <h2>Fyll i uppgifter
            Avsluta med spara</h2>
            <form className="form-2">
                <h6 className="heading-2">Organisation</h6>
                <input
                type="text"
                className="input-field-2"
                placeholder="kund">
                </input>
                <input
                type="text"
                className="input-field-2"
                placeholder="Projektets namn">
                </input>

                <h6 className="heading-2">kontaktperson</h6>
                <input
                type="text"
                className="input-field-2"
                placeholder="Förnamn Efternamn">
                </input>

                <input
                type="text"
                className="input-field-2"
                placeholder="E-Post">
                </input>

                <input
                type="text"
                className="input-field-2"
                placeholder="Telefon">
                </input>

                <input
                type="text"
                className="input-field-2"
                placeholder="Yrkesroll">
                </input>

                <input
                type="text"
                className="input-field-2"
                placeholder="Företag">
                </input>
 
                <button type="submit" className="add-person-2">Add Person</button>
                <button type="submit" className="save-person-2">Save</button>
            </form>
        </div>
    )
}

export default Addproject
