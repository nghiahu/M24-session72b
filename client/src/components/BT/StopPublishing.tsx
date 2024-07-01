import React from 'react'
import { IoIosWarning, IoMdClose } from 'react-icons/io'
import { closeModal } from '../../store/reducers/statusModal';
import { useDispatch, useSelector } from 'react-redux';
import './home.scss'
import { changeStatus } from '../../store/reducers/postReducer';
export default function StopPublishing() {
  const data:any = useSelector(state=>state)
  const dispatch = useDispatch()
  const handleClose=()=>{
      dispatch(closeModal())
  }
  const handleChangeStatus = (post:any) => {
    dispatch(changeStatus(data.statusModal.postUpdate));
    dispatch(closeModal())
    
  };
  return (
    <div className='backgroundConfirm'>
    <div className='formConfirm'>
        <div className='titleConfirm'><h3>Cảnh báo</h3><IoMdClose onClick={handleClose}/></div>
        <div className='contentConfirm'><IoIosWarning className='iconConfirm'/><div>Bạn có chắc chắn muốn ngừng xuất bản bài viết</div></div>
        <div className='btnConfirm'>
          <button className='btnCancelCon'onClick={handleClose}>Hủy</button>
          <button className='btnConfirm' onClick={handleChangeStatus}>Xác nhận</button>
        </div>
    </div>
    </div>
  )
}
