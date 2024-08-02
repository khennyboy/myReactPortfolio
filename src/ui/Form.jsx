import { useEffect, useRef } from "react"
import Error from "./Error"

const Form = () => {
    const ref = useRef()
    useEffect(() => {
        ref.current && ref.current.focus()
    })

    const message = 'This place cant be empty'
    return (
        <form className="mt-10 mb-4">
            <div className="mb-6">
                <div className="relative border-light-grey_200 border-[1px] border-solid 
                    rounded-[10px] dark:border-dark-grey_200 mb-1 has-[:focus]:border-normal-brand_600">
                    <input type="text" id="name" className="focus:outline-0 bg-transparent py-4 w-full block pl-4 peer" placeholder=" " ref={ref} />
                    <label htmlFor="name" className="absolute top-1/2 left-4 -translate-y-1/2 peer-focus:top-0 
                    peer-focus:-translate-y-1/2 transition-all duration-200 ease-linear opacity-50
                    peer-focus:bg-normal-backdropColor z-50 peer-focus:px-4">Name</label>
                </div>
                <Error error={message} />
            </div>
            <div className="mb-6">
                <div className="relative border-light-grey_200 border-[1px] border-solid 
                     rounded-[10px] dark:border-dark-grey_200 mb-1 has-[:focus]:border-normal-brand_600">
                    <input type="text" id="email" className="focus:outline-0 bg-transparent py-4 w-full block pl-4 peer" placeholder=" " />
                    <label htmlFor="email" className="absolute top-1/2 left-4 -translate-y-1/2 peer-focus:top-0 
                    peer-focus:-translate-y-1/2 transition-all duration-200 ease-linear opacity-50
                    peer-focus:bg-normal-backdropColor z-50 peer-focus:px-4">Email</label>
                </div>
                <Error error={message} />
            </div>
            <div className="mb-6">
                <div className="relative border-light-grey_200 border-[1px] border-solid 
                        rounded-[10px] dark:border-dark-grey_200 mb-1 has-[:focus]:border-normal-brand_600">
                    <textarea id="message" className="bg-transparent block w-full resize-none min-h-[150px] focus:outline-0 overflow-auto px-4 pt-4 peer" placeholder=" " />
                    <label htmlFor="message" className="absolute top-4 left-4  peer-focus:top-0 
                    peer-focus:-translate-y-1/2 transition-all duration-200 ease-linear opacity-50
                    peer-focus:bg-normal-backdropColor z-50 peer-focus:px-4">Message</label>
                </div>
                <Error error={message} />
            </div>
            <div className="flex gap-4 justify-end">
                <button type="submit" className="bg-normal-brand_600 text-normal-brand_50 w-[30%] 
                     max-w-[150px] ring-normal-brand_600 focus:ring-1 rounded py-2 ring-offset-2 smallMobile:w-[45%] smallMobile:text-base
                      text-center hover:bg-normal-brand_700 dark:ring-offset-dark-grey_50 font-[500]">Send</button>
                <button type="reset" className="bg-normal-brand_600 text-normal-brand_50 w-[30%] 
                     max-w-[150px] ring-normal-brand_600 focus:ring-1 rounded py-2 ring-offset-2 smallMobile:w-[45%] smallMobile:text-base
                      text-center hover:bg-normal-brand_700 dark:ring-offset-dark-grey_50 font-[500]">Reset</button>
            </div>
        </form>
    )
}

export default Form