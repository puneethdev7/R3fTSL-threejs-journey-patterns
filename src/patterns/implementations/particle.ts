import { vec4, abs, uv, sub, vec3, min, max, step, div, vec2, rotateUV, sin, Fn } from "three/tsl";
import type { PatternFn, TSLVec2Type } from "../types";

const patternBarX = (range: number) => abs(sub(uv().x, range));

const patternBarY = (range: number) => abs(sub(uv().y, range));

const changeUvTSL = Fn( ([ vUv_input ]: [TSLVec2Type]) => {
    const K = vec2(0.5);
    const distanceToCenter = vUv_input.distance(K);
    const subtracted = sub(0.25, distanceToCenter);
    const absoluteValue = abs(subtracted);
    const stepped = absoluteValue.step(0.02);

    return stepped;
});

export const p16: PatternFn = () => {
    const strength = patternBarX(0.5);
    return vec4(vec3(strength), 1.0);
}

export const p17: PatternFn = () => {
    const strength = min(patternBarX(0.5), patternBarY(0.5));
    return vec4(vec3(strength), 1.0);
}

export const p18: PatternFn = () => {
    const strength = max(patternBarX(0.5), patternBarY(0.5));
    return vec4(vec3(strength), 1.0);
}

export const p19: PatternFn = () => {
    const strength = step(0.2, max(patternBarX(0.5), patternBarY(0.5)));
    return vec4(vec3(strength), 1.0);
}

export const p20: PatternFn = () => {
    const strength = max(patternBarX(0.5), patternBarY(0.5)).step(0.2).mul(
    sub(1, step(0.25, max(patternBarX(0.5), patternBarY(0.5)))));
    return vec4(vec3(strength), 1.0);
}

export const p26: PatternFn = () => {
    return vec4(vec3(uv().length()), 1.0);
}

export const p27: PatternFn = () => {
    return vec4(vec3(uv().distance(0.5)), 1.0);
}

export const p28: PatternFn = () => {
    return vec4(vec3(sub(1, uv().distance(vec2(0.5)))), 1.0);
}

export const p29: PatternFn = () => {
    return vec4(vec3(div(0.015, uv().distance(vec2(0.5)))), 1.0);
}

export const p30: PatternFn = () => {
    const strength = div(0.015, vec2(uv().x, uv().y.sub(0.5).mul(5).add(0.5)).distance(vec2(0.5)));
    return vec4(vec3(strength), 1.0);
}

export const p31: PatternFn = () => {
    const strength = div(0.15, vec2(uv().x, uv().y.sub(0.5).mul(5).add(0.5)).distance(vec2(0.5))).mul(
        div(0.15, vec2(uv().x.sub(0.5).mul(5).add(0.5), uv().y).distance(vec2(0.5)))
    );
    return vec4(vec3(strength), 1.0);
}

export const p32: PatternFn = () => {
    const rotatedUV = rotateUV(uv(), Math.PI * 0.25, vec2(0.5));
    const strength = div(0.15, vec2(rotatedUV.x, rotatedUV.y.sub(0.5).mul(5).add(0.5)).distance(vec2(0.5))).mul(
        div(0.15, vec2(rotatedUV.x.sub(0.5).mul(5).add(0.5), rotatedUV.y).distance(vec2(0.5)))
    );
    return vec4(vec3(strength), 1.0);
}

export const p33: PatternFn = () => {
    const strength = sub(1, uv().distance(vec2(0.5)).step(0.3));
    return vec4(vec3(strength), 1.0);
}

export const p34: PatternFn = () => {
    const strength = abs(sub(0.25, uv().distance(vec2(0.5))));
    return vec4(vec3(strength), 1.0);
}

export const p35: PatternFn = () => {
    const strength = step(0.02, p34());
    return vec4(vec3(strength), 1.0);
}

export const p36: PatternFn = () => {
    const strength = p34().step(0.02);
    return vec4(vec3(strength), 1.0);
}

export const p37: PatternFn = () => {
    const vUv = vec2(uv().x, sin(uv().x.mul(30)).mul(0.1).add(uv().y)); // OR add(uv().y, mul(sin(mul(uv().x, 30)), 0.1)))
    const strength = changeUvTSL(vUv);
    return vec4(vec3(strength), 1.0);
}

export const p38: PatternFn = () => {
    const vUv = vec2(
        sin(uv().y.mul(30)).mul(0.1).add(uv().x),
        sin(uv().x.mul(30)).mul(0.1).add(uv().y)
    );
    const strength = changeUvTSL(vUv);
    return vec4(vec3(strength), 1.0);
}

export const p39: PatternFn = () => {
    const vUv = vec2(
        sin(uv().y.mul(100)).mul(0.1).add(uv().x),
        sin(uv().x.mul(100)).mul(0.1).add(uv().y)
    );
    const strength = changeUvTSL(vUv);
    return vec4(vec3(strength), 1.0);
}