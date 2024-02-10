# API Specs user

## Register User

Endpoint: POST /api/users/

Request Body :

```json
{
  "username": "admin",
  "nama_lengkap": "tubagus agus",
  "email": "agus@gmail.com",
  "niptk": "08272346",
  "nomor_telepon": "089373536",
  "password": "1234567"
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "username": "admin",
    "password": "123",
    "nama_lengkap": "tubagus agus",
    "email": "agus@gmail.com",
    "NIPTK": "08272346",
    "nomor_telepon": "089373536"
  },
  "message": "Berhasil menambah data user"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "NIPTK sudah terdaftar"
}
```

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
  "status": "success",
  "data": {
      "username": "admin",
      "password": "123",
      "nama_lengkap": "tubagus agus",
      "email": "agus@gmail.com",
      "NIPTK": "08272346",
      "nomor_telepon": "089373536"
  },
  "message": "Berhasil login"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "username or password wrong"
}
```

## GET user

Endpoint: GET /api/users/current

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "nama": "Sri rejeki",
    "NUPTK": "12335434",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIPY": "0390489585"
  }
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "unauthorized"
}
```

## Update User

Endpoint: PATCH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "username": "admin3", //optional
  "password": "123", //optional
  "nama_lengkap": "tubagus agus", //optional
  "email": "agus@gmail.com", //optional
  "NIPTK": "08272346", //optional
  "nomor_telepon": "089373536" //optional
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "username": "admin3",
    "password": "123",
    "nama_lengkap": "tubagus agus",
    "email": "agus@gmail.com",
    "NIPTK": "08272346",
    "nomor_telepon": "089373536"
  },
  "message": "Berhasil update data user"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "NIPTK sudah terdaftar"
}
```

## Logout

Endpoint : POST /api/users/logout

Headers :

- Authorization : token

Response Body Success:

```json
{
  "status": "success",
  "message": "User logged out"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "Unauthorized"
}
```
