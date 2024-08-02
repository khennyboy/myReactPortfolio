import { BiError } from "react-icons/bi";
const Error = (info) => {
    const { error } = info
    return (
        <div>
            <BiError className="inline-block text-red-600" /> {error}
        </ div>
    )
}

export default Error