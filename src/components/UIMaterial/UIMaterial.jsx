import { Button, Rating, Switch } from '@mui/material'
import './UIMaterial.scss'
import React from 'react'

const UIMaterial = () => {
  return (
    <div>
        <Button variant="contained">Contained</Button>
        <Rating name="half-rating" defaultValue={4} precision={1} />
        <Switch  defaultChecked />
    </div>
  )
}

export default UIMaterial