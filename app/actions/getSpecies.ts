import prisma from "@/app/libs/prismadb";

export default async function getSpecies(){
    try{
        const species = await prisma.species.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
    } catch (error: any){
        throw new Error(error);
    }

}