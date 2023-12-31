import mongoose from "mongoose";

const siswaSchema = mongoose.Schema(
    {
        NIS: {
            type: Number,
            required: true,
        },
        NISN: {
            type: Number,
            required: true,
        },
        nama: {
            type: String,
            required: true,
        },
        jenis_kelamin: {
            type: String,
            enum: ['laki laki', 'perempuan'],
            required: true,
        },
        tempat_lahir: {
            type: String,
            required: true,
        },
        tanggal_lahir: {
            type: Date,
            required: true,
        },
        NIK: {
            type: Number,
            required: true,
        },
        alamat: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        nama_ayah: {
            type: String,
            required: true,
        },
        pekerjaan_ayah: {
            type: String,
            required: true,
        },
        nama_ibu: {
            type: String,
            required: true,
        },
        pekerjaan_ibu: {
            type: String,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

export const Siswa = mongoose.model('Siswa', siswaSchema);