import "../styles/input.css"

const InputField = (props) => {

    const {newPlayerEntry, onSubmitNewPlayer, inputDisplayed} = props

    return (
        <div>
            {inputDisplayed && <div className="name--entry">
                <h2>Leader Board Entry</h2>
                <label htmlFor="newPlayerName">Name</label>
                <input type="text" name="newPlayerName" onChange={newPlayerEntry}/>
                <button className="entry" onClick={onSubmitNewPlayer}>Enter</button>
            </div>}
        </div>
    )
}

export default InputField