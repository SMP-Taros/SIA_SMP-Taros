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
  }),
});

export const { useGetAllCalonSiswaQuery } = calonSiswaApiSlice;
