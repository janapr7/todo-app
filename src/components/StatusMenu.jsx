import { twMerge } from "tailwind-merge";

export default function StatusMenu({ text, active }) {
    return (
        <>
            <button type="button" className={twMerge("mx-1.5", active ? "text-brightBlue" : "hover:text-lVLGray")}>
                {text}
            </button>
        </>
    );
}