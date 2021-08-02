import React from "react";
import "./cards-list.styles.css";
import  Card  from "../card/card.component";
import {connect} from 'react-redux';
import Spinner from '../spinner/spinner.component'

const CardList = ({news}) => {
  return (
    <div className="card-list">
      {news ? news.data.map((singleNews) => (
        <Card key={singleNews.id} singleNews={singleNews} />
      )):<Spinner/>}
    </div>
  );
};

const mapStateToProps=(state)=>({
  news:state.newsState.news,
});

export default connect(mapStateToProps)(CardList);

