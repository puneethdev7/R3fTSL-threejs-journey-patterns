import { mod, mul, uv, vec3, vec4, step, add, sub } from "three/tsl";
import type { PatternFn } from "..";

export const p7: PatternFn = () => {
    const strength = mod(mul(uv().y, 10), 1);
    return vec4(vec3(strength), 1.0);
}

export const p8: PatternFn = () => {
    const strength = step(0.5, p7());
    return vec4(vec3(strength), 1.0);
}

export const p9: PatternFn = () => {
    const strength = step(0.8, p7());
    return vec4(vec3(strength), 1.0);
}

export const p10: PatternFn = () => {
    const strength = step(0.8, mod(mul(uv().x, 10), 1));
    return vec4(vec3(strength), 1.0);
}

export const p11: PatternFn = () => {
    const strength = add(p9(), p10());
    return vec4(vec3(strength), 1.0);
}

export const p12: PatternFn = () => {
    const strength = mul(p9(), p10());
    return vec4(vec3(strength), 1.0);
}

const bar = (step1: number, step2: number, multi: number, subt1: number = 0, subt2: number = 0) =>
    mul(step(step1, mod(sub(mul(uv().x, multi),subt1), 1.0)), step(step2, mod(sub(mul(uv().y, multi),subt2), 1.0)));

export const p13: PatternFn = () => {
    const strength = bar(0.4, 0.8, 10, 10);
    return vec4(vec3(strength), 1.0);
}

export const p14: PatternFn = () => {
    const strength = add(bar(0.4, 0.8, 10, 10), bar(0.8, 0.4, 10, 10));
    return vec4(vec3(strength), 1.0);
}

export const p15: PatternFn = () => {
    const strength = add(
        bar(0.4, 0.8, 10, 0.2),
        bar(0.8, 0.4, 10, 0, 0.2)
    );
    return vec4(vec3(strength), 1.0);
}