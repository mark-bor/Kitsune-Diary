import { api } from '../../redux/api'
import { CertificateData } from './certificates.types'

const certificatesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Sending cookieToken for creating new cache when cookie changes
    getAllCertificates: builder.query<CertificateData[], string>({
      query: () => `/certificates`,
    }),
    getCertificate: builder.query<CertificateData, number>({
      query: (certificateId) => `/certificates/${certificateId}`,
    }),
  }),
});

export const { 
  useGetAllCertificatesQuery, 
  useGetCertificateQuery, 
} = certificatesApi;
