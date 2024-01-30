import { apiSlice } from "./apiSlice.js";

const CALONSISWA_URL = "api/calon_siswa";

export const calonSiswaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCalonSiswa: builder.query({
      query: (data) => ({
        url: `${CALONSISWA_URL}`,
        method: "GET",
        params: data,
        credentials: "include",
      }),
    }),
    getDetailCalonSiswa: builder.query({
      query: (id) => ({
        url: `${CALONSISWA_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    deleteDetailCalonSiswa: builder.mutation({
      query: (data) => ({
        url: `${CALONSISWA_URL}/${data.id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    confirmCalonSiswa: builder.mutation({
      query: (data) => ({
        url: `${CALONSISWA_URL}/confirm`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetAllCalonSiswaQuery,
  useGetDetailCalonSiswaQuery,
  useConfirmCalonSiswaMutation,
  useDeleteDetailCalonSiswaMutation,
} = calonSiswaApiSlice;
