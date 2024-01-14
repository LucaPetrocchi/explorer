
type TooltipProps = {
  text: string;
  position: string;
}

export default function Tooltip({ text, position }: TooltipProps) {
  return (
    <span
      className={`absolute ${position} pointer-events-none
      scale-0 group-hover:scale-100 
      w-auto p-2
      text-white bg-neutral-900 
      transition-all
      whitespace-nowrap`}
    >
      {text}
    </span>
  )
}