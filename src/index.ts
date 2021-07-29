import { Square } from "./core/Square";
import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import $ from "jquery"
import { createTeris } from "./core/viewer/Teris";


const group = createTeris({x:3,y:2})


group.squares.forEach(sq=>{
    sq.viewer = new SquarePageViewer(sq,$("#root"))
})