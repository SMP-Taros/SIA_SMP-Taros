import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },

        nama_lengkap: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        NIPTK: {
            type: Number,
            required: true,
        },
        nomor_telepon: {
            type: Number,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model('User', userSchema);