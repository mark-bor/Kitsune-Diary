export type CertificateData = {
    id: number
    name: string,
    img: string,
    provider: string,
    description: string[],
    date: string,
    color: string,
    url: string,
}

export type CreateCertificate = {
    name: string,
    img: string,
    provider: string,
    description: string[],
    date: string,
    color: string,
    url: string,
}

