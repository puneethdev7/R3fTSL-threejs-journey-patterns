import type { vec2, vec4 } from "three/tsl";
import { patternOptions } from "./patternOptions";

export type PatternFn = () => ReturnType<typeof vec4>;
export type PatternKey = typeof patternOptions[keyof typeof patternOptions];
export type TSLVec2Type = ReturnType<typeof vec2>;
export type TSLVec4Type = ReturnType<typeof vec4>;