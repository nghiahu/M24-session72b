import React from 'react'
import { IoIosWarning, IoMdClose } from 'react-icons/io'
import './home.scss'
import { closeModal } from '../../store/reducers/statusModal';
import { useDispatch } from 'react-redux';
export default function ModalAccessAdd() {
    const dispatch = useDispatch()
    const handleClose=()=>{
        dispatch(closeModal())
    }
  return (
    <div className='background'>
    <div className='formWarn'>
        <div className='titleWarning'><h3>Cảnh báo</h3><IoMdClose onClick={handleClose}/></div>
        <div className='contentWaring'><IoIosWarning className='iconWarn'/><div>Thông tin bài viết không được phép để trống</div></div>
        <button className='btnCancel'onClick={handleClose}>Hủy</button>
    </div>
    </div>
  )
}
