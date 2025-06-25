import { PI, abs, atan, distance, mod, step, sub, uv, vec2, vec3, vec4 } from "three/tsl";
import type { PatternFn } from "../types";

export const p40: PatternFn = () => {
    const initialAngle = atan(uv().x, uv().y);
    return vec4(vec3(initialAngle), 1.0);
};

const initialAngle = () => atan(uv().x.sub(0.5), uv().y.sub(0.5));
const mobifiedAngle = () => initialAngle().div(PI.mul(2)).add(0.5);

export const p41: PatternFn = () => {
    return vec4(vec3(initialAngle()), 1.0);
};

export const p42: PatternFn = () => {
    return vec4(vec3(mobifiedAngle()), 1.0);
};

export const p43: PatternFn = () => {
    return vec4(vec3(mod(mobifiedAngle().mul(20), 1)), 1.0);
};

export const p44: PatternFn = () => {
    return vec4(vec3(initialAngle().mul(16).sin()), 1.0);
};

export const p45: PatternFn = () => {
    const radius = initialAngle().mul(16).sin().mul(0.02).add(0.25);
    const uvDist = sub(1, step(0.01, abs(sub(distance(uv(), vec2(0.5)), radius))));
    return vec4(vec3(uvDist), 1);
};