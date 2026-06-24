import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import useEditForm from "../hooks/useForm";
import Error from "./Error";

const EMAIL_REGEX = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

// Shared classes
const fieldWrap = `relative border border-slate-700 rounded-xl bg-slate-900
                   has-[:focus]:border-violet-500 transition-colors duration-200`;
const inputBase = `block w-full bg-transparent pt-6 pb-2 px-4 text-white text-sm
                   placeholder-transparent focus:outline-none peer`;
const labelBase = `absolute left-4 text-slate-500 text-sm pointer-events-none
                   transition-all duration-200 ease-out
                   top-1/2 -translate-y-1/2
                   peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-violet-400
                   peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0
                   peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:text-slate-500`;

const Form = ({ onCloseModal }) => {
  const ref = useRef();
  const { sendMessage, isSending } = useEditForm(onCloseModal);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  useEffect(() => { ref.current?.focus(); }, []);

  const { ref: registerRef, ...nameRest } = register("name", {
    required: "Name can't be empty",
  });

  return (
    <form className="flex flex-col gap-5 mt-6" onSubmit={handleSubmit((d) => sendMessage(d))} noValidate>

      {/* Name */}
      <div>
        <div className={fieldWrap}>
          <input
            type="text"
            id="name"
            placeholder=" "
            className={inputBase}
            ref={(el) => { registerRef(el); ref.current = el; }}
            {...nameRest}
          />
          <label htmlFor="name" className={labelBase}>Name</label>
        </div>
        <Error error={errors?.name?.message} />
      </div>

      {/* Email */}
      <div>
        <div className={fieldWrap}>
          <input
            type="email"
            id="email"
            placeholder=" "
            className={inputBase}
            {...register("email", {
              required: "Email can't be empty",
              validate: (v) => EMAIL_REGEX.test(v) || "Please enter a valid email address",
            })}
          />
          <label htmlFor="email" className={labelBase}>Email</label>
        </div>
        <Error error={errors?.email?.message} />
      </div>

      {/* Message */}
      <div>
        <div className={`${fieldWrap} has-[:focus]:border-violet-500`}>
          <textarea
            id="mainMessage"
            placeholder=" "
            className={`${inputBase} min-h-[130px] resize-none pt-7`}
            {...register("mainMessage", {
              required: "Message can't be empty",
            })}
          />
          <label
            htmlFor="mainMessage"
            className={`${labelBase} top-4 translate-y-0
                        peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-violet-400
                        peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]`}
          >
            Message
          </label>
        </div>
        <Error error={errors?.mainMessage?.message} />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-1">
        <button
          type="button"
          onClick={() => reset()}
          disabled={isSending}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold border border-slate-700 text-white
                     hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-300
                     transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Reset
        </button>
        <button
          type="submit"
          disabled={isSending}
          className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-violet-600 text-white
                     hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25
                     transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isSending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
};

export default Form;
