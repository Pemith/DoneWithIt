import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.30.64.1:9000/api",
});

export default apiClient;
