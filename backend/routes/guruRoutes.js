import express from "express";
import { Guru } from "../models/guruModels.js";

const router = express.Router();


router.post('/', async (request, response) => {
    try {
        if(
            !request.body.nip ||
            !request.body.nama
        ) {
            // console.log(request.body.nama)
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const newGuru = {
            nip : request.body.nip,
            nama: request.body.nama
        };

        const guru = await Guru.create(newGuru);

        return response.status(201).send(guru);
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

//get siswa
router.get('/', async (request, response) => {
    try {
        const guru = await Guru.find({});

        return response.status(200).json({
            count: guru.length,
            data: guru
        });
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const guru = await Guru.findById(id);

        if(!guru) {
            return response.status(400).json({message:"guru not found"});
        }

        return response.status(200).json({
            count: guru.length,
            data: guru
        });
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});


router.put('/:id', async (request, response) => {
    try {
        if(
            !request.body.nip ||
            !request.body.nama
        ) {
            // console.log(request.body.nama)
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }

        const { id } = request.params;
        const guru = await Guru.findByIdAndUpdate(id, request.body);

        if(!guru) {
            return response.status(400).json({message: "guru not found"})
        }

        return response.status(201).send("Guru updated");
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const guru = await Guru.findByIdAndDelete(id, request.body);

        if(!guru) {
            return response.status(400).json({message: "Guru not found"})
        }

        return response.status(201).send("Guru deleted");
    } catch (error) {
        console.log(error.massage);
        response.status(500).send({ message: error.message})
    }
});

export default router;