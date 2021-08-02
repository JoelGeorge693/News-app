import React from 'react';
import './tag.styles.css';
import { connect } from 'react-redux';


const TagList = ({ categories }) => (
    <ul className="tags">
        {
            categories.map((category, index) => <li key={index} className="tag">{category.category}</li>)
        }
    </ul>
);

const mapStateToProps = (state) => ({
    categories: state.categoryState.categories,
    news: state.newsState.news
});

export default connect(mapStateToProps)(React.memo(TagList));

