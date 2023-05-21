'use client';

import { useRouter } from "next/navigation";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { SafeUser } from "../types";
import { signIn } from "next-auth/react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import ClientOnly from "../components/ClientOnly";
import Button from "../components/buttons/Button";
import Link from "next/link";

interface LoginProps {
    currentUser: SafeUser | null | undefined;
}

const Login: React.FC<LoginProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            if(callback?.ok) {
                toast.success('Inicio de sesión exitos\nBienvenido');
                router.push('/');
            }
            if(callback?.error) {
                toast.error(callback.error);
            }
        })   
    };
    
    
    return (
        <div className="w-full my-32 items-center justify-center flex flex-row">
            <div className="w-[80vw] text-sm md:text-md md:w-[60vw] lg:w-[50vw]">
                <div className="flex flex-col gap-4">
                    <Heading 
                        center
                        title="Bienvenido a Arbolista" 
                        subtitle="Inicia sesion y ayudanos a crear un mejor catalogo de plantas de Guayaquil."
                    />
                    <hr />
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <Input 
                        id="email" 
                        type="email"
                        label='Correo' 
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input 
                        id="password" 
                        type='password'
                        label='Contraseña' 
                        register={register}
                        errors={errors}
                        required
                    />
                    <Button label="Iniciar sesion" onClick={handleSubmit(onSubmit)} />
                </div>
                <div className="flex flex-col gap-4 mt-3">
                    <div className='text-neutral-500 text-center mt-4 font-light'>
                        <div className='justify-center flex flex-row items-center gap-2'>
                            <div>¿Aun no tienes una cuenta?</div>
                            <div className='text-green-500 font-semibold cursor-pointer hover:underline'>
                            <Link href="/register">Registrate</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;