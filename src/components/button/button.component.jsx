import Button from '@material-ui/core/Button';
import './button.styles.css'

const CustomButton = ({children})=>(
    <Button id='button' variant="contained" color="primary">
        {children}
      </Button>
);

export default CustomButton;