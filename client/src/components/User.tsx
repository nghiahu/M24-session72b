import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser, deleteUser, addUser , updateUser} from '../store/reducers/userReducer'
import axios from 'axios';
export default function User() {
    const data:any = useSelector(state=>state)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUser())
    },[])
    const handleDelUser=(id:number)=>{
        let confirmDel = window.confirm("bạn có muốn xóa hay không");
        if(confirmDel){
            dispatch(deleteUser(id));
        }
    }
    const handleAddUser = () => {
        const newUser = {
          name: "Duy Bùi"
        };
        dispatch(addUser(newUser));     
      };
      const handleUpdateUser=(user:any)=>{
        const newUser = {...user,name:"Anh Anh Bùi"}
        dispatch(updateUser(newUser))

      }
  return (
    <div>Danh sách user
        <button onClick={handleAddUser}>Add</button>
        <ul>
            {data.userReducer.users.map((item:any)=>{
                return <li key={item.id}>
                    {item.name}
                    <button onClick={()=>handleDelUser(item.id)} style={{marginLeft:10}}>xóa</button>
                    <button onClick={()=>handleUpdateUser(item)} style={{marginLeft:10}}>Cập nhật</button>
                </li>
            })}
        </ul>
    </div>
  )
}
