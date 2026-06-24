import { BiError } from "react-icons/bi";

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p role="alert" className="flex items-center gap-1.5 mt-1 text-sm text-red-400">
      <BiError className="text-base shrink-0" aria-hidden="true" />
      {error}
    </p>
  );
};

export default Error;
