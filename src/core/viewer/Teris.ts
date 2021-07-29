import { SquareGroup } from "../SquareGroup";
import { Point, Shape } from "../types";
import { getRandom } from "../utils";

export const TShape:Shape = [
    {x:0,y:-1},{x:0,y:0},{x:1,y:0},{x:-1,y:0}
]

export const LShape:Shape = [
    {x:-2,y:0},{x:-1,y:0},{x:0,y:0},{x:0,y:-1}
]

export const LMShape:Shape = [
    {x:2,y:0},{x:1,y:0},{x:0,y:0},{x:0,y:-1}
]

export const SShape:Shape = [
    {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:-1,y:1}
]

export const SMShape:Shape = [
    {x:0,y:0},{x:-1,y:0},{x:0,y:1},{x:1,y:1}
]

export const BShape:Shape = [
    {x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1}
]

export const LineShape:Shape = [
    {x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:2,y:0}
]
export const shapes = [
    TShape,
    LMShape,
    LShape,
    LineShape,
    SMShape,
    BShape,
    SShape
]
export const colors = [
    "red",
    "#fff",
    "green",
    "blue",
    "orange"
]
export function createTeris(centerPoint:Point){
    //颜色随机，形状随机

    let index = getRandom(0,shapes.length);

    const shape = shapes[index];

    index = getRandom(0,colors.length);

    const color = colors[index];
    return new SquareGroup(shape,centerPoint,color)
}