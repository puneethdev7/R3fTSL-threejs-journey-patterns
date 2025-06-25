import { vec4, uv, vec3, sub, vec2 } from "three/tsl";
import type { PatternFn } from "../types";
import { tslRandom } from "./tslUtills";

const uvxFloor = uv().x.mul(10).floor().div(10);
const uvyFloor = uv().y.mul(10).floor().div(10);
const uvxyFloor = () => uv().y.add(uv().x).mul(0.5).mul(10).floor().div(10);

export const p21: PatternFn = () => {
    const strength = uvxFloor;
    return vec4(vec3(strength), 1.0);
}

export const p22: PatternFn = () => {
    const strength = uvxFloor.mul(uvyFloor);
    return vec4(vec3(strength), 1.0);
}

export const p23: PatternFn = () => {
    const strength = sub(0.5, tslRandom(uv()));
    return vec4(vec3(strength), 1.0);
}

export const p24: PatternFn = () => {
    const gridUV2 = vec2(uvxFloor, uvyFloor);
    return vec4(vec3(tslRandom(gridUV2)), 1.0);
}

export const p25: PatternFn = () => {
    const gridUV2 = vec2(uvxFloor, uvxyFloor());
    return vec4(vec3(tslRandom(gridUV2)), 1.0);
}