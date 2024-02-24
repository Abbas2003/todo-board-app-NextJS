import { type ClassValue, clsx } from "clsx";
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
