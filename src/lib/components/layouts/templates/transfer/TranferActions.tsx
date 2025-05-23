import React from "react";
import { useTransferContext } from "./TransferContext";

export const Actions: React.FC = () => {
  const { moveToRight, moveToLeft, selectedLeft, selectedRight } = useTransferContext();

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={moveToRight}
        disabled={selectedLeft.length === 0}
        className="rounded bg-blue-500 px-4 py-1 text-white disabled:opacity-50"
      >
        &gt;
      </button>
      <button
        onClick={moveToLeft}
        disabled={selectedRight.length === 0}
        className="rounded bg-blue-500 px-4 py-1 text-white disabled:opacity-50"
      >
        &lt;
      </button>
    </div>
  );
};
