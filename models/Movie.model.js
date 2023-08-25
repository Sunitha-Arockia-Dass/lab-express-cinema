const{Schema,model}=require('mongoose')

const movieSchema=new Schema(
    {
        title:String,
        stars:[Array],
        director:String,
        image:String,
        description:String,
        showtimes:[Array]
    },
)
module.exports = model('Movie', movieSchema);

