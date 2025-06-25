import { Fn, mix, uv, vec3, vec4 } from "three/tsl";
import type { TSLVec4Type } from ".";

export const baseColor = Fn( ([ uvColor ]: [TSLVec4Type]) => {
    return vec4(mix(vec3(0.0), vec3(uv(), 1), uvColor.xyz), 1.0);
});