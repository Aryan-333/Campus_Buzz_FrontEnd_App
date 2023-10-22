import axios from "axios";

const client = axios.create({ baseURL: "http://172.20.10.18:4848/api" });

export default client;
