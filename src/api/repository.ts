import { Point, TPoint } from "./models/point";

/**
 * 
 * @returns 
 */
async function getPointsDB(): Promise<TPoint[]> {

    return (await Point.find()).map(point => {
        const res: TPoint = {
            lieu: point.lieu
        }
        return res
    })

}

/**
 * 
 * @param lieu 
 */
async function setPointDB(lieu: string): Promise<TPoint> {

    const point: TPoint = {
        lieu: lieu
    }


    const pointFinal = new Point(point);
    await pointFinal.save();
    
    return point;
}

export { getPointsDB, setPointDB }