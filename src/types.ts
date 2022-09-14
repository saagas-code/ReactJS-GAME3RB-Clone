export type games = {
    _id: {
        type: string
    },
    title: string,
    link: string
    img: string,
    details: {
        name: string,
        size: string,
        developer: string,
        publisher: string,
        release: string,
    },
    screenshot: [string],
    trailer: string,
    about: string,
    downloads: {
        torrent: string,
        direct: string
    },
    post: string,
    genre: [string],
    counts: number,

}

export type accounts = {
    _id: string,
    username: string,
    password: string
}

export type category = {
    _id: string,
    category: string
}

