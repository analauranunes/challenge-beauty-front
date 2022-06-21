import axios from "axios";

const baseUrl = axios.create({ baseURL: "http://localhost:3100" });

export default baseUrl;
