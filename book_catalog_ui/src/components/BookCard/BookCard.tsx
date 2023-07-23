
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bookImage from '../../assets/images/book1.jpg';
import IconButton from '@mui/material/IconButton';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
    
      <CardMedia
        sx={{ height: 250,cursor:'pointer' }}
        image={bookImage}
        title="book img"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Book One
        </Typography>
        <Typography variant="body2" color="text.secondary">
          kasun perera
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs.500.0
        </Typography>
      </CardContent>
      <Tooltip title="Update" placement="top">
        <IconButton aria-label="add to favorites">
          <EditCalendarIcon sx={{ color: '#1e90ff' }}/>
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="top">
        <IconButton aria-label="share">
          <DeleteIcon sx={{ color: '#ff4757' }}/>
        </IconButton>
      </Tooltip>
    </Card>
  );
}
