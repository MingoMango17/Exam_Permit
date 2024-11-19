import mongoose from "mongoose";

const studentTuitionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  semesters: [
    {
      semester: Number,
      terms: [
        {
          term: String,
          dueAmount: Number,
          paid: { type: Number, default: 0 },
          balance: Number,
        },
      ],
      totalPayments: { type: Number, default: 0 },
      remainingBalance: Number,
    },
  ],
});

export const StudentTuition =
  mongoose.models.StudentTuition ||
  mongoose.model("StudentTuition", studentTuitionSchema);