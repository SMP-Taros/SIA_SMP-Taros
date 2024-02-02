import {
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Button,
    TextField,
    FormControl,
    OutlinedInput,
    FormGroup,
    InputLabel,
    Typography,
    Alert,
    Dialog,
    DialogContent,
    DialogContentText, dialogClasses, dialogContentTextClasses, Modal
} from "@mui/material";

import {useTheme} from "@emotion/react";
import {tokens} from "../../../Theme";

import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

import {useState, useEffect, useRef} from "react";
import {
    useGetDetailSiswaQuery,
    useUpdateDetailSiswaMutation,
} from "../../../slices/siswaApiSlice";
import {InputOutlined} from "@mui/icons-material";
import ConfirmationDialog from "../../Dialog/ConfirmationDialog.jsx";
import DetailInformationGrid from "../../Form/DetailInformationGrid.jsx";
import {render} from "@testing-library/react";
import {InformationDialog} from "../../Dialog/InformationDialog.jsx";

const DetailSiswa = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {data, isLoading, isError} = useGetDetailSiswaQuery(props.id);
    const [update, {isLoadingUpdate}] = useUpdateDetailSiswaMutation();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [detail, setDetail] = useState();
    const [formData, setFormData] = useState({});
    const [openConfModal, setOpenConfModal] = useState(false);
    const [infoModal, setInfoModal] = useState({isOpen: false, msg: "Berhasil ubah data!"});

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let detail;
    var token = props.id;
    if (!isLoading) {
        detail = data.data
    }
    useEffect(() => {
        if (detail) {
            console.log(detail);
            setFormData(detail);
            console.log(formData);
        }
    }, [detail]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        setOpenConfModal(true)
    };


    function updateData() {
        setOpenConfModal(false)
        var res = update({
            id: token,
            data: formData,
        }).unwrap();
        res.then((e) => {
            if (e.message === "siswa berhasil di update") {
                setInfoModal(prevState => {
                    return {...prevState, isOpen: true}
                })
            } else {
                setInfoModal(prevState => {
                    return { msg: e.message, isOpen: true }
                })
            }
        })

    }

    return (
        <Grid container component="div" sx={{pt: 1}}>
            <ConfirmationDialog
                isOpen={openConfModal}
                content="Perubahan pada data siswa tidak bisa dikembalikan !"
                onAgree={updateData}
                onClose={() => {
                    setOpenConfModal(false)
                    setFormData(detail)
                }}
            ></ConfirmationDialog>
            <InformationDialog
                isOpen={infoModal.isOpen}
                content="Berhasil mengubah data !"
                onClose={() => setInfoModal((prevState) => {
                    return {...prevState, isOpen: false}
                })}
            >
            </InformationDialog>
            <Grid item xs={4}>
                <img
                    alt="profile-user"
                    width="300px"
                    height="300px"
                    src={`../user.png`}
                />
            </Grid>
            <Grid item xs={8}>
                <form onSubmit={onSubmitForm}>
                    {formData &&
                        <>
                            <DetailInformationGrid
                                title="Nama :" inputValue={formData.nama} onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="NIS :" inputValue={formData.nis} onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="Jenis Kelamin :" inputValue={formData.jenis_kelamin}
                                onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="Tempat Lahir :" inputValue={formData.tempat_lahir}
                                onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="Tanggal Lahir :" inputValue={formData.tanggal_lahir}
                                onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="NIK :" inputValue={formData.nik} onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="Agama :" inputValue={formData.agama} onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="Alamat :" inputValue={formData.alamat} onInputChange={handleInputChange}>
                            </DetailInformationGrid>
                            <DetailInformationGrid
                                title="Asal Sekolah :" inputValue={formData.asal_sekolah}
                                onInputChange={handleInputChange}>
                            </DetailInformationGrid>

                        </>
                    }

                    {/*<TableContainer sx={{maxHeight: 440}}>*/}
                    {/*    <Table>*/}
                    {/*        <TableBody>*/}


                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>NIK</TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.nik}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        name="nik"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                        type="text"*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Jenis Kelamin*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.jenis_kelamin}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        name="jenis_kelamin"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                        type="text"*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>Alamat</TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.alamat}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        name="alamat"*/}
                    {/*                        type="text"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Tanggal Lahir*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.tanggal_lahir}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        name="tanggal_lahir"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                        type="text"*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Tempat Lahir*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.tempat_lahir}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        type="text"*/}
                    {/*                        name="tempat_lahir"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}

                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>Agama</TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.agama}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        name="agama"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                        type="text"*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>Status</TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.status}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        name="status"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                        type="text"*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>Anak ke</TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.anak_ke}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        type="text"*/}
                    {/*                        name="anak_ke"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Jumlah Saudara Kandung*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={*/}
                    {/*                            !detail ? "loading" : detail.jumlah_saudara_kandung*/}
                    {/*                        }*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        type="text"*/}
                    {/*                        name="jumlah_saudara_kandung"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Jarak Rumah ke Sekolah*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={*/}
                    {/*                            !detail ? "loading" : detail.jarak_rumah_sekolah*/}
                    {/*                        }*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        type="text"*/}
                    {/*                        name="jarak_rumah_sekolah"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Asal sekolah*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={!detail ? "loading" : detail.asal_sekolah}*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        type="text"*/}
                    {/*                        name="asal_sekolah"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell style={{fontSize: "16px"}}>*/}
                    {/*                    Alamat Asal Sekolah*/}
                    {/*                </TableCell>*/}
                    {/*                <TableCell>*/}
                    {/*                    {" "}*/}
                    {/*                    :{" "}*/}
                    {/*                    <input*/}
                    {/*                        placeholder={*/}
                    {/*                            !detail ? "loading" : detail.alamat_asal_sekolah*/}
                    {/*                        }*/}
                    {/*                        style={{*/}
                    {/*                            border: "none",*/}
                    {/*                            fontSize: "16px",*/}
                    {/*                            marginLeft: "20px",*/}
                    {/*                        }}*/}
                    {/*                        type="text"*/}
                    {/*                        name="alamat_asal_sekolah"*/}
                    {/*                        onChange={handleInputChange}*/}
                    {/*                    />*/}
                    {/*                </TableCell>*/}
                    {/*            </TableRow>*/}
                    {/*        </TableBody>*/}
                    {/*    </Table>*/}
                    {/*</TableContainer>*/}
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Button
                            variant="contained"
                            startIcon={<EditIcon/>}
                            style={{
                                background: colors.greenAccent[800],
                                width: "100px",
                            }}
                            type="submit"
                            disabled={isLoadingUpdate}
                        >
                            Edit
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>
    );
};

export default DetailSiswa;
