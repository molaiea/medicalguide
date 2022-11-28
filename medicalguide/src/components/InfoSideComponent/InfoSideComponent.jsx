import React, {useState} from 'react'
import Button from '@mui/material/Button';
import RouteIcon from '@mui/icons-material/Route';
import ClearIcon from '@mui/icons-material/Clear';
import BusinessIcon from '@mui/icons-material/Business';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Rating } from 'react-simple-star-rating'
import './InfoSideComponent.scss'
const InfoSideComponent = () => {
    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    
        // other logic
      }
      // Optinal callback functions
      const onPointerEnter = () => console.log('Enter')
      const onPointerLeave = () => console.log('Leave')
      const onPointerMove = (value, index) => console.log(value, index)
    
  return (
    <div className='info_comp'>
        <ClearIcon className='clear_icon'/>
        <h1>Element Info</h1>
        <img className='info_image' src='https://static.spacecrafted.com/a7fe7cf453ee4bb6b86031602f79b023/i/c433144928f74efb8c0fb2b60de178e9/1/4SoifmQp45JMgBnHp7ed2/Pharmacy%20Image%252831%2529.jpg'/>
        <ul>
            <li>Info 1</li>
            <li>Info 1</li>
            <li>Info 1</li>
            <li>Info 1</li>
            <li>Info 1</li>
        </ul>
        
        <Button className='direction_button' variant="outlined" startIcon={<RouteIcon />}>
        Itinéraire
      </Button>
      <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
      />
      
    </div>
  )
}

export default InfoSideComponent