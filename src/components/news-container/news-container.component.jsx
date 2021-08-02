import React from "react";
import "./news-container.styles.css";
import {connect} from 'react-redux';

const NewsContainer = ({content,title}) => {
  // console.log(content);
  return (
    <div className="news-container">
        <p id='title'><strong>{title?title:"Please click on one of the cards on your left."}
        </strong></p>
        <p>{content}</p>
    </div>
  )
};

const mapStateToProps = (state)=>({
  content:state.newsState.content,
  title:state.newsState.title,
});

export default connect(mapStateToProps)(NewsContainer);