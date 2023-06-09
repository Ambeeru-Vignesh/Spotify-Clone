import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "910b927c0cmsh928749d4a1c5c89p159895jsne2e71d658aed"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: (params) => ({
        url: "/songs/list-recommendations",
        params: {
          key: "484129036",
          locale: "en-US",
        },
      }),
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => ({
        url: "/songs/get-details",
        method: "POST",
        body: { songid },
      }),
    }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
