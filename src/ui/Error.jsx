import { BiError } from "react-icons/bi";
const Error = (info) => {
    const { error } = info
    return (
        <div className="grid grid-cols-[auto_auto] justify-start content-center gap-1 py-2">
            <BiError className="inline-block text-red-600 " /> {error}
        </div>

    )
}

export default Error