import { Schema, model } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview>({
    email: {type:String, required:true},
    rating: {type:Number, required:true},
    comment :{type:String, required:true},
});

const movieScema = new Schema<TMovie>({
    title: {type: String, required:[true, 'This field is Requred']},
    description: {type: String, required: [true, 'Description is required'] },
    releaseDate: {type: Date},
    genre: {type: String, required: [true, 'genre is required']},
    reviews: {type:[reviewSchema]},
    slug: {type:String},
    viewCount:{type: Number, default:0},
    isDeleted: {type: Boolean, default:false}

})

export const Movie = model<TMovie>('Movie',movieScema);