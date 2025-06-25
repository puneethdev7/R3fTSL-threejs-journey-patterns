import { mx_noise_float, sub, uv, vec3, vec4, sin, step } from "three/tsl";
import type { PatternFn } from "..";

export const p46: PatternFn = () => {
    const strength = mx_noise_float(uv().mul(10));
    return vec4(vec3(strength), 1.0);
}

export const p47: PatternFn = () => {
    const strength = mx_noise_float(uv().mul(10), 10);
    return vec4(vec3(strength), 1.0);
}

export const p48: PatternFn = () => {
    const strength = sub(1, mx_noise_float(uv().mul(10), 1.2).abs());
    return vec4(vec3(strength), 1.0);
}

export const p49: PatternFn = () => {
    const strength = sin(mx_noise_float(uv().mul(10), 1.2).mul(20));
    return vec4(vec3(strength), 1.0);
}

export const p50: PatternFn = () => {
    const strength = step(0.9, sin(mx_noise_float(uv().mul(10), 1.2).mul(20)));
    return vec4(vec3(strength), 1.0);
}