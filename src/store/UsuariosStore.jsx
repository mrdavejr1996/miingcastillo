import { create }  from "zustand";
import { InsertarUsuarios } from "../index";

export const useUsuariosStore = create((set,get)=>({

        isertarUsuarioAdmin:async (p)=>{

            const{data,error} =  await supabase.auth.signUp({
                email: p.correo,
                password: p.pass,
                

            });
            console.log("data del registro del usuario"+data);

            if(error) return;

            await InsertarUsuarios
            ({idauth:data.user.id,
                fecharegistro: new Date(),
                tipouser:"admin"
            });

        },



}));