import { BiError } from "react-icons/bi";
const Error = (info) => {
    const { error } = info
    return (
        <div>
            {error} <span><BiError /></span>
        </ div>
    )
}

export default Error