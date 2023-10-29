import { twMerge } from "tailwind-merge";
import useActiveMenuStore from "../store/activeMenuStore";

export default function StatusMenu({ text, active, dark }) {
    const { setActiveMenu } = useActiveMenuStore();

    return (
        <>
            <button type="button" onClick={()=>setActiveMenu(text)} className={twMerge("mx-1.5", active ? "text-brightBlue" : dark ? "hover:text-dLGrayishBlueHover" : "hover:text-lVDGrayishBlue")}>
                {text}
            </button>
        </>
    );
}