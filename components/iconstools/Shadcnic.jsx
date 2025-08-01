import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function Shadcnic() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="m19.01 11.55-7.46 7.46c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0l7.46-7.46c.46-.46.46-1.19 0-1.65s-1.19-.46-1.65 0ZM19.17 3.34c-.46-.46-1.19-.46-1.65 0L3.34 17.52c-.46.46-.46 1.19 0 1.65a1.16 1.16 0 0 0 1.64 0L19.16 4.99c.46-.46.46-1.19 0-1.65Z" className="b"></path></svg>
            </TooltipTrigger>
            <TooltipContent>
                <p>Shadcn&#47;ui</p>
            </TooltipContent>
        </Tooltip>
    )
}
