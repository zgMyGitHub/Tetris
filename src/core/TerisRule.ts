import GameConfig from "./GameConfig";
import { Point, Shape } from "./types";

/**
 * 该类中提供一系列的函数，根据游戏的规则判断各种情况
 */
export class TerisRule{
    /**
     * 
     * @param params 判断某个形状的方块，是否能够移动到目标位置
     */
    static canIMove(shape:Shape,targePoint:Point):boolean {
        //假设，中心点已经移动到了目标位置，算出每个凶案方块的坐标
        const targetSquarePoints:Point[] = shape.map(it =>{
            return {
                x:it.x + targePoint.x,
                y:it.y + targePoint.y
            }
        })
        //边界判断
        const result = targetSquarePoints.some(p=>{
            return p.x <0 || p.x>GameConfig.panelSize.width -1 || p.y <0 || p.y>GameConfig.panelSize.height -1
        })
        if(result){
            return false
        }
        return false
    }
}