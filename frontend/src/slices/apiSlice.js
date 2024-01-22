import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5555" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["user", "siswa"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
