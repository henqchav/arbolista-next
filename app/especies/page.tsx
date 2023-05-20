'use client';
import { useRef, useState } from "react";
import ClientOnly from "../components/ClientOnly";
import { BiSearch } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

import IconButton from "../components/buttons/IconButton";
import axios from "axios";
import Button from "../components/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import EmptyState from "../components/EmptyState";

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

    const data = [
        {
            "id": 1,
            "names": ["Cedro Odorata","Cedro"],
            "usos_comunes": ["Ornamental","Material"],
            "familia": "Meliaceae",
            "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/Cedrela_odorata_foliage.jpg"
        },
        {
            "id": 2,
            "names": ["Handroanthus chrysanthus","Guayacan"],
            "usos_comunes": ["Ornamental"],
            "familia": "Bignoniaceae",
            "image": "https://static.inaturalist.org/photos/33572615/medium.jpeg"
        },
        {
            "id": 3,
            "names": ["Vitex gigantea","Cedro"],
            "usos_comunes": ["Ornamental", "Material"],
            "familia": "Lamiaceae",
            "image": "https://inaturalist-open-data.s3.amazonaws.com/photos/103375965/medium.jpg"
        }
    ]
    const [view, setView] = useState("list")
    const changeView = (view:String) => {
        if(view === "grid"){
            setView("grid");
        }else{
            setView("list");
        }
    }

    

    return (
        <div className="flex flex-col w-full h-full bg-[#eee] relative">
            <div className="w-full h-auto p-8 text-xl flex bg-[#15803D] flex-row justify-around items-center font-bold text-white">
                <h1 className="w-full sm:text-sm">Especies Nativas</h1>
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
                        <Button style="bg-cyan-900 px-4 border-transparent py-2 w-20" small label="Filtros" onClick={search} />
                    </div>
                </ClientOnly>
            </div>
            <div className="w-[80vw] flex flex-col h-auto px-3 py-3 min-h-500 mx-auto mb-10">
                <div className="w-full pl-8 py-2 h-auto flex flex-row justify-between items-center">
                    <p className="text-sm font-bold text-gray-700">{results.length} Resultados</p>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                        <button
                            type="button"
                            className={(view === "list" ? "bg-gray-100 text-green-700" : "bg-white text-gray-800") + `
                                inline-flex
                                items-center
                                px-4
                                py-2
                                text-sm
                                font-medium
                                border
                                border-gray-200
                                rounded-l-lg
                                hover:bg-gray-100
                                hover:text-green-700
                                focus:z-10
                                focus:ring-2
                                focus:ring-green-700
                                focus:text-green-700
                            `}
                            onClick={()=>changeView("list")}
                        >
                            <FaList className="mr-2"/>
                            Lista
                        </button>
                        <button
                            type="button"
                            className={(view === "grid" ? "bg-gray-100 text-green-700" : "bg-white text-gray-800") + `
                                inline-flex
                                items-center
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-gray-800
                                bg-white
                                border
                                border-gray-200
                                rounded-r-md
                                hover:bg-gray-100
                                hover:text-green-700
                                focus:z-10
                                focus:ring-2
                                focus:ring-green-700
                                focus:text-green-700
                            `}
                            onClick={()=>changeView("grid")}
                        >
                            <IoGrid className="mr-2"/>
                            Multimedia
                        </button>
                    </div>
                </div>
                {data.length ===0 ? (
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                        <EmptyState
                            title="No se encontraron resultados"
                            subtitle="Intenta con otra busqueda"
                        />
                    </div>
                ) : isLoading ? (
                    <div className="w-full h-auto flex flex-col items-center justify-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <>
                        {view === "list" ? (
                            <table className="w-full border-collapse border-spacing-2 table-auto mt-4 shadow-md px-15">
                                <thead>
                                    <tr>
                                        <th className="w-36 border-b text-center p-2 border-slate-500 ">Multimedia</th>
                                        <th className="border-b text-left p-2 border-slate-500">Nombre</th>
                                        <th className="border-b text-left p-2 border-slate-500">Usos Comunes</th>
                                        <th className="border-b text-left p-2 border-slate-500">Familia</th>
                                    </tr>
                                </thead>
                                <ClientOnly>
                                <tbody>

                                    {data.map((result, index)=>(
                                        <tr key={index} className="border-t-2">
                                            <td className="items-center flex justify-center p-2">
                                                <Link href={'/especies/' + result.id}>
                                                    <Image 
                                                        src={result.image} alt={result.names[0]} width={80} height={80}
                                                        className="rounded-md m-0 h-20 w-20"
                                                    />
                                                </Link>
                                            </td>
                                            <td className="text-gray-700 pl-2">
                                                {result.names.map((item, index)=>(
                                                    <div key={index} className={index===0 ? "font-bold" : "font-light"}>{
                                                        <Link href={'/especies/' + result.id}>
                                                        {item}
                                                        </Link>
                                                    }</div>    
                                                ))}
                                            </td>
                                            <td className="text-gray-700 pl-2">
                                                {result.usos_comunes.map((item, index)=>(
                                                    <div key={index}>{item}</div>    
                                                ))}
                                            </td>
                                            <td className="text-gray-700 pl-2">{result.familia}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                </ClientOnly>
                            </table>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                                {data.map((result, index)=>(
                                    <div key={index} className="columns-2xs flex flex-col items-center justify-center rounded-b-sm shadow-md h-[267px]">
                                        <Link href={'/especies/' + result.id}>
                                            <Image
                                                src={result.image} alt={result.names[0]} width={200} height={200}
                                                className=""
                                            />
                                        </Link>
                                        <div className="bg-white w-full text-left p-4 text-gray-700 pl-2">
                                            {result.names.map((item, index)=>(
                                                <div key={index} className={(index===0 ? "font-bold" : "font-light")}>{
                                                    <Link href={'/especies/' + result.id}>
                                                     <p className="whitespace-nowrap overflow-hidden text-ellipsis">{item}</p>
                                                    </Link>
                                                }</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}    
                    </>
                
            )}
                
            </div>
        </div>
    );
}

export default Especies;