import { Camera, Color } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";


const COLORS = [
  "#DC2626",
  "#D97706",
  "#059669",
  "#7C3AED",
  "#DB2777",
  "#023047",
  "#ffb703",
  "#283618",
  "#ffc8dd",
  "#a2d2ff",
  "#cdb4db",
  "#780000",
  "#2a9d8f",
  "#8d99ae",
  "#52796f",
  "#5f0f40",
  "#003566",
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
    return{
      x: Math.round(e.clientX) - camera.x,
      y: Math.round(e.clientY) - camera.y,
    }
}

export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g.toString(16).padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}