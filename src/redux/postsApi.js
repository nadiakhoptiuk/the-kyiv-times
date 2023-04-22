import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Post'],
  endpoints: builder => ({
    // getPokemonByName: builder.query({
    //   query: name => `pokemon/${name}`,
    // }),
    getAllPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
      providesTags: ['Post'],
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
