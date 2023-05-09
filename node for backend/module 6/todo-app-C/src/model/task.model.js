import { Schema, model, Types, Query} from "mongoose"


const TaskSchema = new Schema({
  creator: {
    type: Types.ObjectId,
    ref: "User",
    required: true,
  },
  creatorId: String,
  status: {
    type:String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true
  },
  startDate: Date,
  endDate: Date
},{
  timestamps: true
})

TaskSchema.pre(/^find/, function (next){
// if (this.deleted !== true){
//   return this
//  }

  if (this instanceof Query) {
    this.where({ isDeleted: { $ne: true } }); 
  }
//console.log(this)
  next()
})

export default model('Task', TaskSchema)