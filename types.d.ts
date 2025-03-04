import mongoose from "mongoose"

type Data = {
  id?: mongoose.Types.ObjectId
  key: string
  value: string
}