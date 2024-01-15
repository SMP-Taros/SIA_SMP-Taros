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

const renderElement = (value) => {
  var template = "<div>Hello {username}. Your user id is {userId}.</div>";
  var r = template.match(/\{[\w]+\}/g);
  r &&
    r.forEach((state) => {
      var regex = new RegExp(state, "g");
      var stateItem = state.split(/{|}/g)[1];
      template = template.replace(regex, this.state[stateItem]);
    });
  return <div dangerouslySetInnerHTML={{ __html: template }} />;
};

function createData(nama, nis, nisn, tempat_lahir, tanggal_lahir) {
  return { nama, nis, nisn, tempat_lahir, tanggal_lahir };
}

const rows = [
  createData("Arif", "02938", "0390489585", "Batang", "12 Juni 2012"),
];

export { columns, rows, createData };
