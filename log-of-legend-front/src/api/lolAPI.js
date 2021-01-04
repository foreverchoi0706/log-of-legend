import axios from "axios";

const HOST = "http://localhost:3001";

const lolAPI = {
  championRotations: async () => {
    const { data } = await axios.get(`${HOST}/championRotations`);
    return data;
  },
  searchSummoner: () => {},
};

export default lolAPI;