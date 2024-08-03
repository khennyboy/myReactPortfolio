import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleMessage } from "../api_Services/Request";

const useEditForm = (close) => {
    const { mutate: sendMessage, isPending: isSending } = useMutation({
        mutationFn: handleMessage,
        onSuccess: () => {
            toast.success('Message send successfully');
            close()
        },
        onError: (err) => toast.error(err.message)
    })

    return { sendMessage, isSending }
}

export default useEditForm