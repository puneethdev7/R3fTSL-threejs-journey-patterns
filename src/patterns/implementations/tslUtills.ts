import { vec2 } from "three/tsl";
import type { TSLVec2Type } from "../types";

export const tslRandom = (uv: TSLVec2Type) => {
    const K = vec2(12.9898, 78.233);
    const rand: number = 43758.5453123;
    
    return uv.xy.dot(K.xy).sin().mul(rand).fract();
};