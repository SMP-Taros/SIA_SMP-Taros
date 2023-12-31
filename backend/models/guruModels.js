import mongoose from "mongoose";

const guruSchema = mongoose.Schema(
    {
        nip: {
            type: Number,
            required: true,
        },
        nama: {
            type: String,
            required: true,
        },
        // jenis_kelamin: {
        //     type: String,
        //     enum: ['laki laki', 'perempuan'],
        //     required: true,
        // },
        // status: {
        //     type: String,
        //     enum: ['aktif', 'lulus'],
        //     required: true,
        // },
        // wali: {
        //     type: String,
        //     required: true,
        // },
        // alamat: {
        //     type: String,
        //     required: true,
        // },
        // no_telp: {
        //     type: BigInt,
        //     required: true,
        // },
        // tanggal_masuk: {
        //     type: Date,
        //     required: true,
        // },
        
    },
    {
        timestamps: true,
    }
);

export const Guru = mongoose.model('Guru', guruSchema);