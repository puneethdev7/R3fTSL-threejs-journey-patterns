import { uv, vec3, vec4, sub, mul } from "three/tsl";
import type { PatternFn } from "..";

export const p3: PatternFn = () => vec4(vec3(uv().x), 1.0);

export const p4: PatternFn = () => vec4(vec3(uv().y), 1.0);

export const p5: PatternFn = () => {
    const strength = sub(1, uv().y);
    return vec4(vec3(strength), 1.0);
}

export const p6: PatternFn = () => {
    const strength = mul(uv().y, 10);
    return vec4(vec3(strength), 1.0);
}