"use client";

export default function Button({
  type,
  onClick,
}: {
  type: string;
  onClick?: () => void;
}) {
  return (
    <div>
      <button
        style={{
          padding: 3,
        }}
        onClick={onClick}
      >
        {type}
      </button>
    </div>
  );
}
