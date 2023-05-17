'use client'
import { BiSearch } from 'react-icons/bi';

const Search = () => {
    return (
        <div 
            className="
                border-[1px]
                w-auto
                py-2
                rounded-full
                hover:shadow-md
                transition
                cursor-pointer
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between
                "
            >
                <div 
                    className="
                        text-sm
                        pl-6
                        pr-2
                        text-gray-600
                        flex
                        flex-row
                        items-center
                        gap-3
                    "
                >
                    <div >Especie Nativa</div>
                    <div 
                        className="
                            p-2
                            bg-green-500
                            rounded-full
                            text-white
                        "
                    >
                        <BiSearch size={18}></BiSearch>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Search;