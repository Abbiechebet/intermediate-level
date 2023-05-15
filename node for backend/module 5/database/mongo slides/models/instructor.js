//create our schema which describes what each document will look like
const instructorSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        isHilarious: {type: Boolean, default: true},
        favouriteColors: [String]
    },
    {timestamps: true} //automatically adds createdAt and updatedAt
)

const Instructor = mongoose.model("Instructor", instructorSchema)
module.exports = Instructor