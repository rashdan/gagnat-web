import React from 'react'

const AddExtraProj = () => {
    return (
        <div className="main-Add-3">
            <form className="form-3">
                <h2>Fyll i uppgifter
                    Avsluta med spara</h2>
                <h6 className="heading-3">Organisation</h6>
                <input
                    type="text"
                    className="input-field-3"
                    placeholder="kund">
                </input>
                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Projektets namn">
                </input>

                <h6 className="heading-3">kontaktperson</h6>
                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Förnamn Efternamn">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="E-Post">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Telefon">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Yrkesroll">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Företag">
                </input>

                <div className="space-3">
                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Förnamn Efternamn">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="E-Post">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Telefon">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Yrkesroll">
                </input>

                <input
                    type="text"
                    className="input-field-3"
                    placeholder="Företag">
                </input>

                </div>

                <button type="submit" className="add-person-3">Add Person</button>
                <button type="submit" className="save-person-3">Save</button>
            </form>
        </div>
    )
}

export default AddExtraProj
