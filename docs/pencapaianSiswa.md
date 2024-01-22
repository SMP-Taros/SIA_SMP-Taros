# API specs pencapaian siswa

## create pencapaian Siswa

Endpoint: POST /api/siswa/pencapaian/:SiswaId

Request Body :

```json
{
  "id_siswa": "1"*,
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
  "data": {
    "id_siswa": "1"*,
  "membaca_alquran": "lancar",
  "jumlah_hafalan": "1 juz",
  "hobby": "main",
  "cita_cita": "badminton",
  "prestasi": "prestasi"
  },
  "meesage": "data pencapaian berhasil ditambahkan"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak lengkap"
}
```

## get Kesehatan Siswa

Endpoint: GET /api/siswa/pencapaian/:SiswaId

Request Body :

```json
{
  "id_siswa": "1"*,
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
  "errors": "id salah"
}
```

## update Kesehatan Siswa

Endpoint: PUT /api/kesehatan/:SiswaId

Request Body :

```json
{
  "id_siswa": "1"*,
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
  "errors": "id salah"
}
```
