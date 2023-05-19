'use client';
import { useRef, useState } from "react";
import ClientOnly from "../components/ClientOnly";
import { BiSearch } from "react-icons/bi";
import IconButton from "../components/buttons/IconButton";
import axios from "axios";
import Button from "../components/buttons/Button";


const Especies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const searchRef = useRef(null)
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const searchEndpoint = (query:String) => `/api/search?q=${query}`
    const search = () => {
        setIsLoading(true);
        axios.get(searchEndpoint(query))
        .then((res)=>{
            setResults(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    return (
        <div className="flex flex-col mb-20">
            <div className="w-full h-auto p-8 text-xl flex bg-green-800 flex-row justify-around items-center font-bold text-white">
                <h1 className="w-full">Especies Nativas</h1>
                <ClientOnly>
                    <div className="h-auto flex flex-row items-center gap-2">
                        <input
                            type="text"
                            placeholder="Especie"
                            onChange={(e)=>setQuery(e.target.value)}
                            className="
                                w-auto
                                p-2
                                text-sm
                                text-gray-600
                                font-light 
                                bg-white 
                                border-1
                                rounded-md
                                outline-none
                                transition
                                disabled:opacity-70
                                disabled:cursor-not-allowed
                                pl-4
                                border-neutral-300
                                focus:border-teal-500
                            "                    
                        />
                        <IconButton small onClick={search} iconSize={20} icon={BiSearch}/>
                        <Button style="py-2 w-20" small label="Filtros" onClick={search} />
                    </div>
                    
                </ClientOnly>
            </div>
        </div>
    );
}

export default Especies;