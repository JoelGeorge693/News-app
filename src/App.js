import { useEffect, useState } from 'react';
import './App.css';
import { SearchBox } from './components/Search-Bar/SearchBar';
import CardList from './components/card-list/card-list.component';
import NewsContainer from './components/news-container/news-container.component';
import { fetchNewsStartAsync } from './redux/news/news.action';
import { connect } from 'react-redux';
import {BsFillCaretRightFill} from 'react-icons/bs';
import TransitionsModal from './components/modal/modal.component';



function App({ fetchNewsStartAsync,news }) {

  // const [data,setData] = useState([]);
  const homeUrl = `http://get.scrapehero.com/news-api/news/?x-api-key=IHEwbeb7kN3f7I3Qizc1FqAJVexvcKUE`;
  const [searchField, changeField] = useState('');
  const [urlValue,changeURLValue] = useState(homeUrl);

  
  const handleChange = (e) => changeField(e.target.value);
  const changeUrl = ()=>changeURLValue(news.nextUrl);

  const handleSubmit=(e)=> {
    e.preventDefault();

    if(searchField.length>0) 
    changeURLValue(`http://get.scrapehero.com/news-api/news/?q=${searchField}`);
  };

  useEffect(() => {
    fetchNewsStartAsync(urlValue);

    // const fetchData=()=>{

    //   fetch(`https://get.scrapehero.com/news-api/news/?x-api-key=${APIKey}`)
    //   .then(response =>{
    //     if(response.status !== 200)
    //       throw new Error("Server responded with error");
    //     return response.json()
    //   }).then((data) => {
    //     setData(data.result.data);
    //   })
    //   .catch((error)=>console.error(error));
    // }

    // fetchData();
  }, [urlValue]);

  return (
    <div className='App'>
        <h1>News App</h1>
        <div className='header'>
          <span onClick={()=>changeUrl()} id='arrow-right'>Next <BsFillCaretRightFill/></span>
          <SearchBox handleSubmit={handleSubmit} handleChange={handleChange} />
          <TransitionsModal id='modal'/>
        </div>
      <div className='container'>
        <CardList />
        <NewsContainer />
      </div>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  fetchNewsStartAsync: (url) => dispatch(fetchNewsStartAsync(url)),
});

const mapStateToProps = (state)=>({
  news:state.newsState.news
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);

