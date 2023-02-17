import { NextFunction, Request, Response } from "express";
import * as service from "../service"
/**
 * 
 * @param req 
 * @param res 
 */
async function getPoint(req: Request, res: Response, next: NextFunction) {


    try {
        const result = await service.getPoints();
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }

}

/**
 * 
 * @param req 
 * @param res 
 */
async function setPoint(req: Request, res: Response, next: NextFunction) {

    const body = req.body

    try {
        const result = await service.setPoint(body.lieu);

        res.status(200).json(result);
    } catch (err) {
        next(err)
    }

}

const handler = { getPoint, setPoint }

export default handler;