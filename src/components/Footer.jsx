import { twMerge } from "tailwind-merge";

export default function Footer({ dark }) {
  return (
    <>
      <div
        className={twMerge(
          "text-lDGrayishBlue text-center text-lg py-5",
          dark && "text-lVDGrayishBlue"
        )}
      >
        <p>Drag and drop to reorder list</p>
      </div>
    </>
  );
}
