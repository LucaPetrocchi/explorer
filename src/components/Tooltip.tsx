
type TooltipProps = {
  text: string;
  position: string;
}

export default function Tooltip({ text, position }: TooltipProps) {
  return (
    <span
      className={`absolute ${position} pointer-events-none
      scale-0 group-hover:scale-100 
      w-auto p-2 z-10
      text-white bg-neutral-900 border-gray-400 border-2
      transition-all
      whitespace-nowrap`}
    >
      {text}
    </span>
  )
}