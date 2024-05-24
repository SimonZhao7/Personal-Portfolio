// Types
import { TextPillComponent } from "./types";

const TextPill: TextPillComponent = ({ text }) => {
  return (
    <div
      className="flex w-max items-center justify-center rounded-full bg-dark-blue px-5 py-1
        text-sm text-white lg:text-base 2xl:text-xl"
    >
      {text}
    </div>
  );
};

export default TextPill;
