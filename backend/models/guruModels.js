import mongoose from "mongoose";

const guruSchema = mongoose.Schema(
    {
        NUPTK: {
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
        NIPY: {
            type: Number,
            required: true,
        },
        NIK: {
            type: Number,
            required: true,
        },
        no_kk: {
            type: Number,
            required: true,
        },
        status_kepegawaian: {
            type: String,
            enum: ['PNS', 'Honorer', 'Magang'],
            required: true,
        },
        jenis_ptk: {
            type: String,
            enum: ['PNS', 'Honorer', 'Magang'],
            required: true,
        },
        alamat: {
            type: String,
            required: true,
        },
        no_hp: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        sk_pengangkatan: {
            type: String,
            required: true,
        },
        tmt_pengangkatan: {
            type: String,
            required: true,
        },
        status_perkawinan: {
            type: String,
            enum: ['Menikah', 'Lajang'],
            required: true,
        },
        nama_pasangan: {
            type: String,
            required: false,
        },
        pekerjaan_pasangan: {
            type: String,
            enum: ['Menikah', 'Lajang'],
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
);

export const Guru = mongoose.model('Guru', guruSchema);