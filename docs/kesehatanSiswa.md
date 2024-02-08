# API specs kesehatan siswa

## create Kesehatan Siswa

Endpoint: POST /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
  "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
}
```

Response Body Success:

```json
{
  "error": false,
  "message": "data kesehatan berhasil ditambahkan",
  "data": {
    "siswa_id": "1",
    "golongan_darah": "A",
    "penyakit_yang_pernah_diderita": "asma",
    "kelainan_jasmani": "none",
    "berat_badan": "58",
    "tinggi_badan": "200"
  }
}
```

Response Body Failed:

```json
{
  "error": true
}
```

## get Kesehatan Siswa

Endpoint: GET /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
  "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
}
```

Response Body Success:

```json
{
  "error": false,
  "message": "Berhasil membuat siswa",
  "data": {
    "siswa_id": "1"*,
    "golongan_darah": "A",
    "penyakit_yang_pernah_diderita": "asma",
    "kelainan_jasmani": "none",
    "berat_badan": "58",
    "tinggi_badan": "200"
  }
}
```

Response Body Failed:

```json
{
  "error": true,
  "message": error.message,
}
```

## update Kesehatan Siswa

Endpoint: PUT /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
  "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
}
```

Response Body Success:

```json
{
  "error": false,
  "message": "Update kesehatan berhasil",
  "data": {
    "siswa_id": "1"*,
    "golongan_darah": "A",
    "penyakit_yang_pernah_diderita": "asma",
    "kelainan_jasmani": "none",
    "berat_badan": "58",
    "tinggi_badan": "200"
  }
}
```

Response Body Failed:

```json
{
  "error": true,
  "message": error.message,
}
```
