import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useContent = () => {
    const[contents, setContents] = useState([]);

    const refresh = () => {
        axios.get(`${BACKEND_URL}/api/v1/content`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then(response => setContents(response.data.content))
        .then(data => console.log(data))
        .catch(error => console.error("Error:", error));
    }

    useEffect(() => {
        refresh();
    }, []);
  return {contents, refresh};
}
