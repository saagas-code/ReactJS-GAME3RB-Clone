import axios from "axios";


export const api = {




    // HOME

    GetAll: async (page: number, query: string, id: number, limit: number) => {
        let url = `http://localhost:8819/games?page=${page}&limit=${limit}`

        if(!id) {
            if(query !== '') {
                url += `&q=${query}`;
            }
    
            let response = await axios.get(url)
            return response.data
        }
        if(id) {
            let pagina = page - 1
            let url = `http://localhost:8819/games/${pagina}`

            let response = await axios.get(url)
            return response.data
        }
    },

    GetAllPage: async (page: number) => {
        let url = `http://localhost:8819/games/${page}`

        let response = await axios.get(url)
        return response.data
    },

    GetAllMost: async () => {
        let response = await axios.get(`http://localhost:8819/gamesMOST`)
        return response.data
    },


    GetCategory: async (category: string) => {
        let url = `http://localhost:8819/games/category/${category}`

        let response = await axios.get(url)
        return response.data
    },

    GetGame: async (game: string) => {
        let response = await axios.get(`http://localhost:8819/games/game/${game}`)
        return response.data
    },

    GetCategoryPerPage: async (category: string, page: number) => {
        let url = `http://localhost:8819/games/category/${category}/${page}`

        let response = await axios.get(url)
        return response.data
    },

    countCLICK: async (id: string, counts: number) => {
        let response = await axios.put(`http://localhost:8819/games/count/${id}`, {
            counts
        })
        return response.data
    },

    // LOGIN

    Login: async (username: string, password: string) => {
        let response = await axios.post("http://localhost:8819/login", {
            username, password, 
          });
        return response.data
    },

    Register: async (username: string, password: string) => {
        let response = await axios.post("http://localhost:8819/register", {
            username, password, 
          });
        return response.data
    },

    AccountREQUEST: async (username: string) => {
        let response = await axios.post("http://localhost:8819/request", {
            username
        });
        return response.data
    },

    // ADMIN

    GetOneGame: async (id: string) => {
        let response = await axios.get(`http://localhost:8819/admin/game/${id}`)
        return response.data
    },

    AddNewGame: async (title: string, img: string, size: string, developer: string,
        publisher: string, release: string, screen1: string, screen2: string, 
        trailer: string, about: string, torrent: string, direct: string,
        post: string, link: string, genre: string, count: number) => {
        let response = await axios.post(`http://localhost:8819/admin/game`, {
            title, img, size, developer, publisher, release, screen1, screen2, trailer, about,
            torrent, direct, post,
            link, genre, count
        })
        return response.data
    },

    DeletePost: async (id: string) => {
        let response = await axios.delete(`http://localhost:8819/admin/game/${id}`)
        return response.data
    },

    EditGame: async (title: string, img: string, size: string, developer: string,
        publisher: string, release: string, screen1: string, screen2: string, 
        trailer: string, about: string, torrent: string, direct: string,
        post: string, link: string, genre: string, count: number, finder: string) => {
        let response = await axios.put(`http://localhost:8819/admin/game/${finder}`, {
            title, img, size, developer, publisher, release, screen1, screen2, trailer, about,
            torrent, direct, post,
            link, genre, count
        })
        return response.data
    },


    GetAllCategory: async () => {
        let response = await axios.get(`http://localhost:8819/getCategory`)
        return response.data
    },
    AddCategory: async (category: string) => {
        let response = await axios.post(`http://localhost:8819/addCategory`, {
            category
        })
        return response.data
    },
    DeleteCategory: async (category: string) => {
        let response = await axios.post(`http://localhost:8819/deleteCategory`, {
            category
        })
        return response.data
    }


}