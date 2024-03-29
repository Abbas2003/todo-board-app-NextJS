import { 
  Circle,
  MousePointer2,
  Pencil, 
  Redo2, 
  Square, 
  StickyNote, 
  Type, 
  Undo2} from "lucide-react";

import { ToolButton } from "./tool-button";
import { CanvasMode } from "@/types/canvas";
import { CanvasState } from "@/types/canvas";
import { LayerType } from "@/types/canvas";



interface ToolbarProps {
  canvasState: CanvasState
  setCanvasState: (newState: CanvasState) => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export const Toolbar = ({
  undo,
  redo,
  canvasState,
  setCanvasState,
  canRedo,
  canUndo,
}: ToolbarProps) => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton 
          label="Select"
          icon={MousePointer2}
          onCLick={()=> setCanvasState({ mode: CanvasMode.None, })}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing 
          }
        />
        <ToolButton 
          label="Text"
          icon={Type}
          onCLick={()=> setCanvasState({ 
            mode: CanvasMode.Inserting,
            LayerType: LayerType.Text
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Text
          }
        />
        <ToolButton 
          label="Sticky note"
          icon={StickyNote}
          onCLick={() => setCanvasState({
            mode: CanvasMode.Inserting,
            LayerType: LayerType.Note
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Note
          }
        />
        <ToolButton 
          label="Rectangle"
          icon={Square}
          onCLick={() => setCanvasState({
            mode: CanvasMode.Inserting,
            LayerType: LayerType.Rectangle
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Rectangle
          }
        />
        <ToolButton 
          label="Ellipse"
          icon={Circle}
          onCLick={() => setCanvasState({
            mode: CanvasMode.Inserting,
            LayerType: LayerType.Ellipse
          })}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.LayerType === LayerType.Ellipse
          }
        />
        <ToolButton 
          label="Pen"
          icon={Pencil}
          onCLick={() => setCanvasState({
            mode: CanvasMode.Pencil,
          })}
          isActive={
            canvasState.mode === CanvasMode.Pencil
          }
        />
      </div>
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <ToolButton 
          label="Undo"
          icon={Undo2}
          onCLick={undo}
          isDisabled={!canUndo}
        />
        <ToolButton 
          label="Redo"
          icon={Redo2}
          onCLick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};


export const ToolbarSkeleton = () => {
  return(
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md" />
  )
}
