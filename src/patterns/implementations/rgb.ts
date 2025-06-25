import { uv, vec2, vec4 } from "three/tsl";
import type { PatternFn } from "../types";

export const red: PatternFn = () => vec4(1.0, 0.0, 0.0, 1.0);
export const p1: PatternFn = () => vec4(vec2(uv()), 1.0, 1.0);
export const p2: PatternFn = () => vec4(vec2(uv()), 0.0, 1.0);