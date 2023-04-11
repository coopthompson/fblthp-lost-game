const InputField = (props) => {

    const {newPlayerEntry, onSubmitNewPlayer, named} = props

    return (
        <div>
            {named && <div className="name--entry">
                <label htmlFor="newPlayerName">Name</label>
                <input type="text" name="newPlayerName" onChange={newPlayerEntry}/>
                <label htmlFor="newPlayerTime">Time</label>
                <input type="number" name="newPlayerTime" onChange={newPlayerEntry} />
                <button onClick={onSubmitNewPlayer}>Enter</button>
            </div>}
        </div>
    )
}

export default InputField