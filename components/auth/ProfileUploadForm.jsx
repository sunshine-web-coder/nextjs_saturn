import React from 'react'
import { BsCameraFill } from 'react-icons/bs'
import CustomButton from '../button/CustomButton'
import style from "./auth.module.scss"

export default function ProfileUploadForm() {
  return (
    <form className="absolute bottom-[100px] flex items-center">
        <div className="pl-6 pr-6">
            <div className={`relative bg-[url('https://res.cloudinary.com/dmnmoupqh/image/upload/v1698121585/Saturn/ob5l33kzqfbbqhto3tgq.webp')] flex h-[100px] w-[100px] flex-col justify-end rounded-full bg-[white] bg-cover bg-no-repeat shadow-md ${style.thAvatar}`}>
            <div className={`absolute bottom-0 w-full ${style.upload_btn_wrapper}`}>
                <input type="file" name="myfile" accept="image/*" />
                <button className={`flex items-center justify-center w-full p-[10px] text-xl border-0 bg-black/40 text-white ${style.upload_btn}`}>
                <BsCameraFill />
                </button>
            </div>
            </div>
        </div>
        <CustomButton text="Upload" style="withBgStyle" className="relative top-5 max-w-max h-4 rounded p-4 text-sm shadow-sm" />
    </form>
  )
}
