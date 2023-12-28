import React, { useState } from "react";
import "./style.css";
import avatar from "../../assets/account_avatr.png";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { formatDate } from "../../constants/PostImg";
interface Blog {
  _id: string;
  caption: string;
  imageUrl: string;
  location: string;
  Hashtag: string[];
  createdAt: Date;
  user: any;
  // Add other properties as needed
}

interface CarouselProps {
  blogDta: Blog; // Adjust the type to match your actual type
  onBookMarkClick: (id: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ blogDta, onBookMarkClick }) => {
  const [liked, setLiked] = useState(false); //initial state like (blogdata.like)
  const [bookMark, setBookMark] = useState(false); //intial state bookmark (blogdata.bookmark)

  const handleBookMarks = (id: string) => {
    console.log(id);
    onBookMarkClick(id);
  };

  return (
    <div className="carouselCard" key={blogDta._id}>
      <div className="avatar_div">
        <img
          className="img_avatar"
          src={blogDta.user.avatar ? blogDta.imageUrl : avatar}
          alt="avatar"
        />
      </div>
      <div className="post-details">
        <div className="user-info">
          <span>{blogDta.user.username}</span>
          <span className="date">
            {formatDate(new Date(blogDta.createdAt))}
          </span>
        </div>
        <div className="post-info">
          <p>{blogDta.caption}</p>
          <span>
            {blogDta.Hashtag.map((i) => {
              return (
                <span className="tags" key={i}>
                  {i}
                </span>
              );
            })}
          </span>
          <img className="img-post" src={blogDta.imageUrl} alt="imgurl" />
        </div>
        <div className="logos_bottom">
          <div className="like_logo" onClick={() => setLiked(!liked)}>
            {liked ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
          </div>
          <div
            className="bookMark"
            onClick={() => {
              setBookMark(!bookMark);
              handleBookMarks(blogDta._id);
            }}
          >
            {bookMark ? (
              <FaBookmark style={{ color: "white" }} />
            ) : (
              <FaRegBookmark />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
