import React, { useState } from "react";
import Spinner from "./LoadingSpinner";

type Props = {
  text: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function LoadingButton({ text, onClick, className }: Props) {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLoading(true);
    if (onClick) {
      onClick(event);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <button
      className={[
        "border rounded-lg text-black px-2.5 py-1.5 min-w-16 minh-4",
        "inline-flex justify-center items-center",
        className,
      ].join(" ")}
      onClick={handleClick}
    >
      {loading && (
        <span className="mr-2">
          <Spinner />
        </span>
      )}
      <span>{text}</span>
    </button>
  );
}
