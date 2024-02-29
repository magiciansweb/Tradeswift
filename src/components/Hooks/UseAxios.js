import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tradeswift-server.vercel.app',
  });
const UseAxios = () => {
    return   instance
};

export default UseAxios;