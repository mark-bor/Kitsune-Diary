// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const api = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://kd-server.onrender.com/api',
    mode: 'cors',
    prepareHeaders(headers, api) {
      headers.set('API-Key', process.env.NEXT_PUBLIC_KD_SERVER_API_KEY || '');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: ({}) => ({}),
});
