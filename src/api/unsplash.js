import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc", }
})