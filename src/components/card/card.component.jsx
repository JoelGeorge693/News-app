import React from "react";
import "./card.style.css";
import { dispatchContentOnCLick, dispatchTitleOnCLick } from "../../redux/news/news.action";
import { connect } from "react-redux";

const Card = ({ singleNews,dispatchContentOnClick,dispatchTitleOnCLick }) => {
  let sentimentColor = '';

  switch (singleNews.sentiment) {
    case "Positive":
      sentimentColor = "green-dot";
      break;
    case "Negative":
      sentimentColor = "red-dot";
      break;
    case "Neutral":
      sentimentColor = 'grey-dot';
      break;
    default: sentimentColor = '';
  };

  const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const displayDate = `${day}/${month}/${year}`;


  return (
    <div className="card-container" onClick={()=>{
      return(

        dispatchContentOnClick(singleNews.content),
        dispatchTitleOnCLick(singleNews.title)
      )}
    }>
      <div className='color-publication-container'>
        <span className={sentimentColor} />
        <p id='publication'>{singleNews.publication}</p>
      </div>
      <p id='date'>{displayDate}</p>
      <p><strong>{singleNews.title}</strong></p>
    </div>
  )
};

const mapDispatchToProps = (dispatch)=>({
  dispatchContentOnClick : (content)=>dispatch(dispatchContentOnCLick(content)),
  dispatchTitleOnCLick: (title)=>dispatch(dispatchTitleOnCLick(title)),
});

export default connect(null,mapDispatchToProps)(React.memo(Card));