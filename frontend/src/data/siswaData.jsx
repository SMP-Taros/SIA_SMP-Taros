const columns = [
  { id: "nama", label: "Nama", minWidth: 170 },
  { id: "nis", label: "NIS", minWidth: 100 },
  {
    id: "nisn",
    label: "NISN",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tempat_lahir",
    label: "Tempat Lahir",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tanggal_lahir",
    label: "Tanggal Lahir",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    link: "/siswa/edit",
    format: (value) => value.toFixed(2),
  },
];

function createData(nama, nis, nisn, tempat_lahir, tanggal_lahir, action) {
  return { nama, nis, nisn, tempat_lahir, tanggal_lahir, action };
}

const rows = [
  createData("Arif", "02938", "0390489585", "Batang", "12 Juni 2012", "action"),
];

export { columns, rows, createData };
