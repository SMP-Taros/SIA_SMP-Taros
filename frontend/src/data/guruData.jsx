const columns = [
  { id: "nomor", label: "No", minWidth: 50 },
  {
    id: "nama",
    label: "Nama",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "nuptk", label: "NUPTK", minWidth: 80 },
  {
    id: "jenis_kelamin",
    label: "Jenis Kelamin",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tempat_lahir",
    label: "Tempat Lahir",
    minWidth: 70,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tanggal_lahir",
    label: "Tanggal Lahir",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "nipy", label: "NIPY", minWidth: 80 },
  {
    id: "action",
    label: "Action",
    minWidth: 80,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(nomor, nama, nuptk, jenis_kelamin, tempat_lahir, tanggal_lahir, nipy, action) {

  return { nomor, nama, nuptk, jenis_kelamin, tempat_lahir, tanggal_lahir, nipy, action };
}

const rows = [
  createData("1", "Siti Pamungkas", 902989, "Perempuan", "Wonogiri", "10 Januari 2002", 728292928, "action"),
];

export { columns, rows, createData };
