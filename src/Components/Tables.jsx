/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { getPosts, deletePost, updatePost } from '../Services/Crud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditPost from '../Pages/EditData';
import { Link,  useNavigate } from 'react-router-dom';
import Logout from './Button/Logout';
import Navbar from './Button/Logout';

function Tables() {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  const [editingPost, setEditingPost] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPosts();
        console.log(posts);
        setPostData(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []); 

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPostData((prevData) => prevData.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  const handleSaveEdit = async (editedPost) => {
    try {
      await updatePost(editedPost.id, editedPost);
      setPostData((prevData) =>
        prevData.map((post) => (post.id === editedPost.id ? editedPost : post))
      );
      setEditingPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
    <Logout/>
    <div className="container mx-auto mt-8  bg-slate-800" >
  <h1 className="text-3xl font-bold mb-4 text-white">Post Data</h1>
  <table className="min-w-full  border border-gray-300">
    <thead>
      <tr className='text-white'>
        <th className="py-2 px-4 border-b">ID</th>
        <th className="py-2 px-4 border-b">First Name</th>
        <th className="py-2 px-4 border-b">Last Name</th>
        
        <th className="py-2 px-4 border-b">Dob</th>
        <th className="py-2 px-4 border-b">Contact</th>
        <th className="py-2 px-4 border-b">Address</th>
        <th className="py-2 px-4 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {postData.map((post) => (
        <tr key={post.id} className='text-white'>
          <td className="py-2 px-4 border-b">{post.id}</td>
          <td className="py-2 px-4 border-b">{post.first_name}</td>
          <td className="py-2 px-4 border-b">{post.last_name}</td>
       
          <td className="py-2 px-4 border-b">{post.Dob}</td>
          <td className="py-2 px-4 border-b">{post.Contact}</td>
          <td className="py-2 px-4 border-b">{post.Address}</td>
          <td className="py-2 px-4 border-b ">
            <div to={`/edit/${post.id}`} onClick={()=>navigate(`/edit/${post.id}` , {state:post})}>
              <FontAwesomeIcon
                icon={faEdit}
                className="mr-2 cursor-pointer text-blue-500"
              />
              </div>
            <FontAwesomeIcon
            icon={faTrash}
            className="cursor-pointer mr-2 text-red-500"
            onClick={() => handleDelete(post.id)}
            />
            </td>
            </tr>
            ))}
            </tbody>
            </table>
            {editingPost && (
              <EditPost post={editingPost} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
  )}
</div>

</div>
  );
}

export default Tables;
