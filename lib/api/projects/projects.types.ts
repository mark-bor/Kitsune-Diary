export type ErrorData = {
    data: {
        statusCode: number,
        message: string
    },
    status: number
}

export type ProjectData = {
    id: string
    url: string
    github?: string
    title: string
    description: string
    steck: string[]
    status: string
    category: string
    type: string
}
export type GetProjectsData = {
    [key: string]: string[]
    "status": string[]
    "category": string[]
    "type": string[]
}

export type CreateProject = {
    url: string
    github?: string
    title: string
    description: string
    steck: string[]
    status: string
    category: string
    type: string
}

