import Link from "next/link";

export const styles = `w-fit border-background/40 rounded-[999px] px-4 py-2 font-italiana font-bold hover:scale-110 transition-all duration-500 overflow-hidden before:content-[""] before:transition-all before:duration-500 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:absolute before:inset-0 before:size-full `;

interface IButton {
  type: string;
  name: string;
  color: string;
  colorHover:string;
  background?: string;
  backgroundHover: string;
  border?:boolean
  className?:string
}

const variants = {
    black:"text-black",
    background: "bg-background",
    foreground: "bg-foreground",
    brownBtn:"bg-[#A37A4B]",
    bf_background: "before:bg-background",
    bf_foreground: "before:bg-foreground"
}

const Button = ({
  type,
  name,
  color,
  colorHover,
  background,
  backgroundHover,
  border,
  className,
}: IButton) => {

  if (type === "button") return <button>{name}</button>;



  return (
    <Link
      className={`group ${border ? "border": "border-none"} group relative ${styles} ${className} ${background && variants[background]} ${variants[backgroundHover]}`}
      href={"/apply"}
    >
      <p className={`relative text-${variants[color]} transition-colors duration-500 group-hover:text-black`}>
        {name}
      </p>
    </Link>
  );
};

export default Button;
