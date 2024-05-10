"use client"

import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useSelf, useStorage } from "@/liveblocks.config";
import { LayerType, Side, XYWH } from "@/types/canvas";
import { memo } from "react"

interface SelectionBoxProp {
    onResizeHandlePointerDown: (corner: Side, initialBound: XYWH) => void;
}

const HANDLE_WIDTH = 8;

export const SelectionBox = memo(({ onResizeHandlePointerDown}: SelectionBoxProp) => {
    const soleLayerId = useSelf((me) => me.presence.selection.length === 1 ? me.presence.selection[0] : null)

    const isShowingHandles = useStorage((root) => soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path)

    const bounds = useSelectionBounds();
    if(!bounds){
        return null
    }

    return(
        <>
            <rect 
                className="fill-transparent stroke-blue-500 stroke-1 pointer-events-none"
                style={{
                    transform: `translate(${bounds.x}px, ${bounds.y}px)`
                }}
                x={0}
                y={0}
                width={bounds.width}
                height={bounds.height}
            />
        </>
    )
})


SelectionBox.displayName = "SelectionBox"