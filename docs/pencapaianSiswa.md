# API specs pencapaian siswa

## create pencapaian Siswa

Endpoint: POST /api/siswa/pencapaian/:SiswaId

Request Body :

```json
{
  "membaca_alquran": "lancar",
  "jumlah_hafalan": "1 juz",
  "hobby": "main",
  "cita_cita": "badminton",
  "prestasi": "prestasi"
}
```

Response Body Success:

```json
{
  "status" : "success",
  "message": "data pencapaian berhasil ditambahkan",
  "data": {
    "id_siswa": "1"*,
    "membaca_alquran": "lancar",
    "jumlah_hafalan": "1 juz",
    "hobby": "main",
    "cita_cita": "badminton",
    "prestasi": "prestasi"
  },
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": error.message
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

Endpoint: GET /api/siswa/pencapaian/:SiswaId

Request Body :

```json
{
  "membaca_alquran": "lancar",
  "jumlah_hafalan": "1 juz",
  "hobby": "main",
  "cita_cita": "badminton",
  "prestasi": "prestasi"
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "id_siswa": "1"*,
    "membaca_alquran": "lancar",
    "jumlah_hafalan": "1 juz",
    "hobby": "main",
    "cita_cita": "badminton",
    "prestasi": "prestasi"
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": error.message
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

Endpoint: PUT /api/kesehatan/:SiswaId

Request Body :

```json
{
  "membaca_alquran": "lancar",
  "jumlah_hafalan": "1 juz",
  "hobby": "main",
  "cita_cita": "badminton",
  "prestasi": "prestasi"
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "data kesehatan berhasil di update"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": error.message
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```
