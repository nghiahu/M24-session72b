import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './home.scss';
import { GrPowerReset } from 'react-icons/gr';
import { IoIosUnlock } from "react-icons/io";
import { getAllPost ,changeStatus} from '../../store/reducers/postReducer';
import { useDispatch, useSelector } from 'react-redux';
import { PiArrowsClockwiseBold } from 'react-icons/pi';
import { MdLock } from 'react-icons/md';
import { FaEye } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
import ModalAccessAdd from './ModalAccessAdd';
import StopPublishing from './StopPublishing';
import { openModal } from '../../store/reducers/statusModal';

export default function ListPost() {
  const location = useLocation();
  const isAddPostPage = location.pathname.includes('addPost');
  const data:any = useSelector(state => state);
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [searchTerm, setSearchTerm] = useState(''); 

  useEffect(()=>{
    dispatch(getAllPost())
  },[dispatch]);

  const handleChangeStatus = (post:any) => {
    if (post.status) {
      const newPost = { ...post, status: false };
      dispatch(openModal(newPost))
    } else {
      const newPost = { ...post, status: true };
      dispatch(changeStatus(newPost));
    }
  };

  const handleSortChange = (event:any) => {
    setSortOrder(event.target.value);
  };

  const handleSearchChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const sortedPosts = [...data.postReducer.posts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    }
    return b.title.localeCompare(a.title);
  });

  const filteredPosts = sortedPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {data.statusModal.statusML ? <StopPublishing /> : ""}
      <div>
        <div className='arl'>
          <NavLink className='arlListPost' to="/">Danh sách bài viết</NavLink>
          <NavLink className='arlAddPost' to="addPost">Thêm mới bài viết</NavLink>
        </div>
        <Outlet />
        {!isAddPostPage && (
          <div className='formlistPost'>
            <div className='InppAndSort'>
              <select className='selSort' onChange={handleSortChange}>
                <option value="asc">Sắp xếp theo tên (A-Z)</option>
                <option value="desc">Sắp xếp theo tên (Z-A)</option>
              </select>
              <input
                className='inpAddPost'
                type="text"
                placeholder='Tìm kiếm bài viết theo tên'
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <PiArrowsClockwiseBold className='iconReser' />
            </div>
            <table className='tablePost'>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tiêu đề</th>
                  <th>Hình ảnh</th>
                  <th>Thể loại</th>
                  <th>Ngày viết</th>
                  <th>Trạng thái</th>
                  <th>Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post, index) => (
                  <tr key={post.id}>
                    <td>{index + 1}</td>
                    <td>{post.title}</td>
                    <td><img src={post.thumbnail} alt="" /></td>
                    <td>{post.category}</td>
                    <td>{post.updateAt}</td>
                    <td>{post.status ? "Đã Xuất bản" : "Ngừng xuất bản"}</td>
                    <td>
                      <div className='btnFuncion'>
                        <button onClick={() => handleChangeStatus(post)} className={post.status ? "btnUnLock" : "btnLock"}>
                          {post.status ? <IoIosUnlock /> : <MdLock />}
                        </button>
                        <button className='btnWatch'><FaEye /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='footer'>
              <div>Số lượng: {filteredPosts.length} bản ghi</div>
              <div className='footert'>
                <div className='footertew'>20 bản ghi trên 1 trang <IoIosArrowDown /></div>
                <div className='divFoots'>
                  <div>Trước</div>
                  <button>1</button>
                  <div>2</div>
                  <div>3</div>
                  <div>...</div>
                  <div>10</div>
                  <div>Sau</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
