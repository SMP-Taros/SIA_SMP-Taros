# API Specs

## Login User

Endpoint: POST /api/users/login

Request Body :

```json
{
  "username": "admin",
  "password": "123"
}
```

Response Body Success:

```json
{
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Failed:

```json
{
  "errors": "username or password wrong"
}
```

## Add Siswa

Endpoint: POST /api/siswa/

Request Body :

```json
{
  "nama": "arip",
  "NIS": "12335434",
  "jenis_kelamin": "Laki Laki",
  "NISN": "0390489585",
  "tempat_lahir": "wonogiri",
  "tanggal_lahir": "12 Januari 2004",
  "NIK": "298238383",
  "alamat": "Batang",
  "email": "halo@gamil.com",
  "nama_ayah": "aripin",
  "pekerjaan_ayah": "dokter",
  "nama_ibu": "siti",
  "pekerjaan_ibu": "nganggur"
}
```

Response Body Success:

```json
{
  "data": {},
  "meesage": "siswa berhasil ditambahkan"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak lengkap"
}
```

## Update Siswa

Endpoint: PATCH /api/siswa/:id

Request Body :

```json
{
  "nama": "arip junior",
  "NIS": "12335434",
  "jenis_kelamin": "Laki Laki",
  "NISN": "0390489585",
  "tempat_lahir": "wonogiri",
  "tanggal_lahir": "12 Januari 2004",
  "NIK": "298238383",
  "alamat": "Batang",
  "email": "halo@gamil.com",
  "nama_ayah": "aripin",
  "pekerjaan_ayah": "dokter",
  "nama_ibu": "siti",
  "pekerjaan_ibu": "nganggur"
}
```

Response Body Success:

```json
{
  "data": {},
  "meesage": "siswa berhasil di update"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak boleh kosong"
}
```

## GET Siswa All

Endpoint: GET /api/siswa/

Response Body Success:

```json
{
  "data": {
    "nama": "arip",
    "NIS": "02938",
    "NISN": "0390489585",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004"
  }
}
```

Response Body Failed:

```json
{
  "errors": "id tidak ditemukan"
}
```

## GET Siswa Detail

Endpoint: DEL /api/siswa/:id

Request Body :

```json
{
  "id": "unique-id"
}
```

Response Body Success:

```json
{
  "messages": "siswa berhasil dihapus"
}
```

Response Body Failed:

```json
{
  "errors": "id tidak ditemukan"
}
```

## Delete Siswa

Endpoint: GET /api/siswa/:id

Request Body :

```json
{
  "id": "unique-id"
}
```

Response Body Success:

```json
{
  "data": {}
}
```

Response Body Failed:

```json
{
  "errors": "data error"
}
```

## Add Guru

## Update Guru

## Read Guru

## Delete Guru
