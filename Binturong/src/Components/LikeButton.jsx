// import React, { useState } from 'react';
// import '../App.css';
// import { SendLike, RemoveLike } from './Services/LikeService';
//
// function LikeButton({ postId, initialLikes, userId, onLike }) {
//    const [likes, setLikes] = useState(initialLikes);
//    const [liked, setLiked] = useState(false);
//
//    const handleLike = async () => {
//       const newLikes = liked ? likes - 1 : likes + 1;
//       setLikes(newLikes);
//       setLiked(!liked);
//
//       try {
//          if (liked) {
//             await RemoveLike(postId, userId);
//          } else {
//             await SendLike(postId, userId);
//          }
//          onLike(newLikes);
//       } catch (error) {
//          console.error("Error liking/unliking post:", error);
//       }
//    };
//
//    return (
//       <div className="like-button-container">
//          <button
//             className={`like-button ${liked ? 'liked' : ''}`}
//             onClick={handleLike}
//          >
//             {likes} Likes
//          </button>
//       </div>
//    );
// }
//
// export default LikeButton;
