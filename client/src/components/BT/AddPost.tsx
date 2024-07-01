import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppPost } from '../../store/reducers/postReducer';
import { openModal } from '../../store/reducers/statusModal';
import ModalAccessAdd from './ModalAccessAdd';
import './addPost.scss';
export default function AddPost() {
  const [title,setTitle] = useState<string>("");
  const [image,setImage] = useState<string>("");
  const [category,setCategory] = useState<string>("");
  const [content,setContent] = useState<string>("")
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth() + 1; 
  const year = today.getFullYear();
  const formattedDate = `${date}/${month}/${year}`;
  const inlitstate = useSelector((state:any)=>state)
  const handleChangeTitle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTitle(e.target.value)
  }
  const handleChangeImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setImage(e.target.value)
  }
  const handleChangeCategory=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setCategory(e.target.value)
  }
  const handleChangeContent=(e: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setContent(e.target.value)
  }
  const dispatch = useDispatch()
  const handleAddPost=()=>{
    const newPost = {
      title:title,
      thumbnail:image,
      content:content,
      category:category,
      createdAt:"Nghĩa",
      updateAt: formattedDate,
      status:true
    }
    const AccessPost={}
    if (title && image && category && content) {
      dispatch(getAppPost(newPost));
    } else {
      dispatch(openModal(AccessPost));
    }
  }
  return (
    <>
    {inlitstate.statusModal.statusML? <ModalAccessAdd></ModalAccessAdd> : ""}
    <div className='outLine'>
      <div className='inpAdd'>
        <label htmlFor="">Tên bài viết</label>
        <input type="text" className='inp' onChange={handleChangeTitle}/>
      </div>
      <div className='inpAdd'>
        <label htmlFor="">Hình ảnh</label>
        <input type="text" className='inp'onChange={handleChangeImage}/>
      </div>
      <div className='inpAdd'>
        <label htmlFor="">Thể loại</label>
        <input type="text" className='inp'onChange={handleChangeCategory}/>
      </div>
      <div className='inpAdd'>
        <label htmlFor="">Nội dung</label>
        <textarea  id="" className='textInp' placeholder='Nhập nội dung' onChange={handleChangeContent}></textarea>
      </div>
      <div className='bntAddPost'>
        <button className='btn' onClick={handleAddPost}>Xuất bản</button>
      </div>
    </div>
    </>
  )
}
