# API specs kesehatan siswa

## create Kesehatan Siswa

Endpoint: POST /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
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
  "status": "success",
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
  "status": "fail",
  "message": error.message,
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```

## get Kesehatan Siswa

Endpoint: GET /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
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
  "status": "success",
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
  "status": "fail",
  "message": error.message,
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```

## update Kesehatan Siswa

Endpoint: PUT /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
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
  "status": "success",
  "message": "Data kesehatan berhasil di update"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": error.message,
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```
