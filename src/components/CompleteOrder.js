import React, { useEffect ,useState} from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import axios from "axios";

const CompleteOrder = ({ orderId }) => {
  const navigate = useNavigate(); // Get the navigate function
  const [open, setOpen] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState({
    orderId: orderId,
    otp: "",
  });

  const handleClose = () => {
    navigate('/');
    setOpen(false);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setOrder((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const completeOrder = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post(
        'https://gharaanah.onrender.com/expert/completeorder',
        order,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      if(response.data.status === true){
        setCompleted(true);
        console.log("Order completed successfully", response.data);
      } else {
        setError(response.data.response);
      }
    } catch (error) {
      setError(error.response.data.response);
      console.error('Error completing order:', error);
    }
  };

  return (
    <>
      <div style={{ pointerEvents: 'auto' }}>
        <Dialog open={open} PaperProps={{}}>
          <DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            {completed ? "Order Completed" : "Enter OTP"}
          </DialogTitle>
          <DialogContent>
            {!completed ? (
              <>
                <Input
                  sx={{
                    '& .MuiInput-input': { padding: '0' },
                    fontFamily: 'Segoe UI,sans-serif,system-ui',
                    color: 'rgb(59, 67, 76)',
                    fontWeight: '600',
                    width: '100%',
                    border: 'none',
                    marginBottom: '0px',
                    fontSize: '15px',
                    padding: '8px',
                    borderRadius: '4px',
                    outline: 'none',
                    '@media(max-width:991px)': {
                      fontSize: '14px',
                      padding: '7px',
                    },
                    '@media(max-width:479px)': {
                      fontSize: '13px',
                      padding: '6px',
                    },
                  }}
                  type="otp"
                  placeholder="OTP"
                  disableUnderline
                  value={order.otp}
                  onChange={handleInputs}
                  name="otp"
                />
                {error && <Typography>{error}</Typography>}
                <Button onClick={completeOrder}>Complete Order</Button>
              </>
            ) : (
              <>
                {/* Render the content for completed order */}
                <Typography>Order Completed Successfully!</Typography>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default CompleteOrder;
