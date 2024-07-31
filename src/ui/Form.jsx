import Error from "./Error"

const Form = (info) => {
    const { onCloseModal } = info
    console.log(onCloseModal)
    const message = 'This place cant be empty'
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <Error error={message} />
            </div>
            <div>
                <label htmlFor="email">Name</label>
                <input type="text" id="email" />
                <Error error={message} />
            </div>
            <div>
                <label htmlFor="message">Name</label>
                <textarea id="message" />
                <Error error={message} />
            </div>
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
        </form>
    )
}

export default Form