import { useState } from "react";
import axios from "axios";

function useFlip(initialState = true) {
    const [isFlipped, setFlipped] = useState(initialState);
    const flip = () => {
        setFlipped(isUp => !isUp);
    }
    return [isFlipped, flip];
}

function useAxios(baseUrl) {
    const [responses, setResponses] = useState([]);

    const addResponse = async (formatter = data => data, extendedUrl = "") => {
        const res = await axios.get(`${baseUrl}${extendedUrl}`);
        setResponses(data => [...data, formatter(res.data)]);
    }
    
    return [responses, addResponse];
}

export { useFlip, useAxios };