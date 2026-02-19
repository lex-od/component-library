import clsx from "clsx";
import { Eye, EyeOff, X } from "lucide-react";
import React, { FC, useState } from "react";

type InputProps = {
  clearable?: boolean;
  onChange?: (newValue: string) => void;
  containerClassName?: string;
} & Omit<React.ComponentProps<"input">, "onChange">;

const twIconButton =
  "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors outline-none cursor-pointer flex items-center justify-center";

const Input: FC<InputProps> = ({
  type,
  className,
  clearable,
  onChange,
  containerClassName,
  ...inputProps
}) => {
  const [actualType, setActualType] = useState(type);

  return (
    <div className={clsx("relative", containerClassName)}>
      <input
        className={clsx(
          "w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 transition-all placeholder:text-gray-400 focus:border-blue-500 outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50",
          (type === "password" || clearable) && "pr-10",
          className,
        )}
        type={actualType}
        onChange={(e) => onChange?.(e.target.value)}
        {...inputProps}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() =>
            setActualType((prev) => (prev === "password" ? "text" : "password"))
          }
          className={twIconButton}
        >
          {actualType === "password" ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
      {clearable && (
        <button
          type="button"
          onClick={() => onChange?.("")}
          className={twIconButton}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Input;
