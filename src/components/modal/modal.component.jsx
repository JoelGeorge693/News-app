import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import './modal.styles.css';
import {GrClose} from 'react-icons/gr';
import './modal.styles.css';
import {fetchSourceStartAsync} from '../../redux/Source/source.actions';
import {fetchCategoriesStartAsync} from '../../redux/Category/category.actions';
import {connect} from 'react-redux';
import TagList from '../tag/tag.component';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    height:'550px',
    width:'600px',
    maxWidth:'600px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function TransitionsModal({fetchCategoriesStartAsync,fetchSourceStartAsync}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectValue,changeValue] = useState('Categories');
  const [searchValue,changeSearchValue] = useState('');

  useEffect(()=>{
    fetchSourceStartAsync();
    fetchCategoriesStartAsync();
  },[fetchSourceStartAsync,fetchCategoriesStartAsync])

  const handleChange=(e)=>{
  changeValue(e.target.value);
};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='modal'>
      <Button id='button' type="button" variant="contained" color="primary" onClick={handleOpen}>
        Advanced Search
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <span id='close-icon' onClick={handleClose}><GrClose/></span>
            <h2 id="transition-modal-title">Advanced Search</h2>
            <Button id='button' type="button" variant="contained" color="primary" onClick={handleOpen}>
              Add New Filter 
            </Button>
            <form className='form'>
              <select value = {selectValue} onChange={handleChange} name='filters' id='filters'>
                <option value='Categories'>Categories</option>
                <option value='Sentiment'>Sentiment</option>
                <option value='Source'>Source</option>
              </select>
              {/* <input type='text'><TagList/></input> */}
            </form>
            {selectValue==='Categories'?<TagList/>:null}

            <div className = 'button'>

            <Button id='cancel-button' type="button" variant="contained" color="secondary" onClick={handleClose}>
              Cancel 
            </Button>
            <Button id='apply-button' type="button" variant="contained" color="primary" onClick={handleClose}>
              Apply 
            </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


const mapDispatchToProps = (dispatch)=>({
  fetchSourceStartAsync : ()=>dispatch(fetchSourceStartAsync()),
  fetchCategoriesStartAsync:()=>dispatch(fetchCategoriesStartAsync()),
});

export default connect(null,mapDispatchToProps)(TransitionsModal);