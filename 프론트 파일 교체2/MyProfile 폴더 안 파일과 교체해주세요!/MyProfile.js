import React, {useEffect, useState} from "react";
import { Avatar } from '@mui/material'; //이름 프로필
import './MyProfile.css';
import NicknameModal from "./NicknameModal";
import ConfirmModal from "./ConfirmModal";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import axios from "axios";

function MyProfile() {
    const [user, setUser] = useState({});
    const [myPosts, setMyPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedName, setEditedName] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        axios.get("/api/myprofile")
            .then(response => {
                const sortedPosts = response.data.myPosts.sort((a, b) => b.post_id - a.post_id);
                setMyPosts(sortedPosts);
                setUser({
                    name: response.data.userName,
                    postCount: response.data.postCount
                });
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleNicknameChange = (newNickname) => {
        setEditedName(newNickname);
        setIsModalOpen(false);
    };

    const handleDeleteClick = () => {
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        // 여기에 회원 탈퇴 로직을 추가(백엔드랑 같이)
        setEditedName("");
        setIsModalOpen(false);
        setIsDeleteModalOpen(false);
    };
    //삭제
    const [selectedPosts, setSelectedPosts] = useState([]);
    const togglePostSelection = (postId) => {
        if (selectedPosts.includes(postId)) {
            setSelectedPosts(selectedPosts.filter((id) => id !== postId));
        } else {
            setSelectedPosts([...selectedPosts, postId]);
        }
    };

  const handleDeleteSelectedPosts = () => {
    //    선택한 포스트들 삭제 로직 추가 (백엔드 연동 필요)
        if (selectedPosts.length >= 2) {
        setSelectedPosts([]); // 수정된 부분, 2개이상 포스트 클릭시 토글해제
        }

         const updatedPosts = myPosts.filter((post) => !selectedPosts.includes(post.id));
    
         setMyPosts(updatedPosts);
        setSelectedPosts([]);
   };

    return (
        <div>
            <div className='app-header'>
                <h1 className="header-letter-title"><a href="/timeline" style={{ color: '#000', textDecoration: 'none' }}>인스타그랜마</a></h1>
                <div className='header-icons'>
                    {/*<AccountCircleOutlinedIcon fontSize="large"/>*/}
                </div>
                <h1>내 정보</h1>
            </div>

            <div className="profile-container">
                <div className="user-profile">
                    <h2><Avatar sx={{ width: 100, height: 100 }}>{editedName || user.name}</Avatar></h2>
                    <span>{editedName || user.name}</span>
                </div>

                <div className="user-information">
                    <h3>{user.postCount}</h3> <span>게시글 수</span>
                </div>

                
                <div className="profile-edit">
                    <div className="edit-button custom-button">
                        <button onClick={handleEditClick}>
                            닉네임 변경</button>
                    </div>
                    <div className= "delete-button custom-button">
                        <button onClick={handleDeleteSelectedPosts}>
                            선택한 글 삭제</button>
                    </div>
                    <div className="edit-button custom-button">
                        <button onClick={handleDeleteClick}>
                            로그아웃</button>
                    </div>
                    <div className="exit-button custom-button">
                        <button onClick={handleDeleteClick}>
                            회원 탈퇴</button>
                    </div> 
                </div>
                



                <div className="user-feed">
                    <h4></h4>
                    <div className="grid-container">
                        {myPosts.map((post) => (
                            <div
                                key={post.id}
                                className={`grid-item ${selectedPosts.includes(post.id) ? "selected" : ""}`}
                                onClick={() => togglePostSelection(post.id)}
                            >
                                <img src={post.imageUrl} alt={`게시글 ${post.id}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <NicknameModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    onNicknameChange={handleNicknameChange}
                />
                <ConfirmModal
                    isOpen={isDeleteModalOpen}
                    onRequestClose={() => setIsDeleteModalOpen(false)}
                    onConfirm={handleDeleteConfirm}
                />

            </div>

        </div>
    );
}

export default MyProfile;