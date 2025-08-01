import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Vercelic() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor"><path d="M64.002 8.576 128 119.424H0Zm0 0"></path></svg>
            </TooltipTrigger>
            <TooltipContent>
                <p>Vercel</p>
            </TooltipContent>
        </Tooltip>
    )
}
