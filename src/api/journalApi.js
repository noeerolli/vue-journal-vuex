

import axios from "axios";

const journalApi = axios.create({
    baseURL: "https://vue-demos-3d426-default-rtdb.firebaseio.com"
})



export default journalApi