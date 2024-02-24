"use client"

import { LucideIcon } from "lucide-react"

import { Hint } from "@/components/hint"
import { Button } from "@/components/ui/button"


interface ToolButtonProps {
    label: string,
    icon: LucideIcon,
    onCLick: () => void,
    isActive?: boolean
    isDisabled?: boolean
}


export const ToolButton = ({
    label,
    icon: Icon,
    onCLick,
    isActive,
    isDisabled
}: ToolButtonProps) => {
    return(
        <Hint label={label} side="right" sideOffset={14}>
            <Button
                disabled={isDisabled}
                onClick={onCLick}
                size="icon"
                variant={isActive ? "boardActive" : "board"}
            >
                <Icon />
            </Button>
        </Hint>
    )
}