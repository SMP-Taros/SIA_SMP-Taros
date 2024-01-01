import express from "express";
import { Siswa } from "../models/siswaModel.js";

const router = express.Router();


router.post('/', async (request, response) => {
    try {
        if(
            !request.body.nis ||
            !request.body.calon_id ||
            !request.body.nama
        ) {
            // console.log(request.body.nama)
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const newSiswa = {
            nis : request.body.nis,
            calon_id : request.body.calon_id,
            nama: request.body.nama
        };

        const siswa = await Siswa.create(newSiswa);

        return response.status(201).send(siswa);
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

//get siswa
router.get('/', async (request, response) => {
    try {
        const siswa = await Siswa.find({});

        return response.status(200).json({
            count: siswa.length,
            data: siswa
        });
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const siswa = await Siswa.findById(id);

        return response.status(200).json({
            count: siswa.length,
            data: siswa
        });
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});


router.put('/:id', async (request, response) => {
    try {
        if(
            !request.body.nis ||
            !request.body.calon_id ||
            !request.body.nama
        ) {
            // console.log(request.body.nama)
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const { id } = request.params;
        const siswa = await Siswa.findByIdAndUpdate(id, request.body);

        if(!siswa) {
            return response.status(400).json({message: "Siswa not found"})
        }

        return response.status(201).send("Siswa updated");
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const siswa = await Siswa.findByIdAndDelete(id, request.body);

        if(!siswa) {
            return response.status(400).json({message: "Siswa not found"})
        }

        return response.status(201).send("Siswa deleted");
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

export default router;