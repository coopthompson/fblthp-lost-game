const InputField = (props) => {

    const {newPlayerEntry, onSubmitNewPlayer, inputDisplayed} = props

    return (
        <div>
            {inputDisplayed && <div className="name--entry">
                <label htmlFor="newPlayerName">Name</label>
                <input type="text" name="newPlayerName" onChange={newPlayerEntry}/>
                <button onClick={onSubmitNewPlayer}>Enter</button>
            </div>}
        </div>
    )
}

export default InputField