import express, { Request, Response } from "express"
import { Movie } from "./movie.model";

const router = express.Router();

router.post("/",async(req:Request, res:Response)=>{
    console.log(req.body);
const result = await Movie.create(req.body);
res.json({
    success:true,
    message: "Movie is Created Successfully",
    data: result,
})

})

export const movieRoutes = router;