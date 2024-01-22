import { apiSlice } from "./apiSlice.js";
const SISWA_URL = "api/siswa";

export const siswaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (data) => ({
        url: `${SISWA_URL}`,
        method: "GET",
        params: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllQuery } = siswaApiSlice;
