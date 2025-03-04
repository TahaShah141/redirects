import { Data } from "@/types"
import mongoose from "mongoose"

const DataSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
}, { timestamps: true })

export default mongoose.models.Data || mongoose.model<Data>("Data", DataSchema)