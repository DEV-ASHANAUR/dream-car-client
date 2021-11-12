import React from 'react';
import { Avatar, Rating } from '@mui/material';
const img ="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
const Card = (props) => {
    const {message,ratting,userName} = props.data;
    
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "gray",
        }}
      >
        <Avatar
          imgProps={{ style: { borderRadius: "50%" } }}
          src={img}
          style={{
            width: 120,
            height: 120,
            border: "1px solid lightgray",
            padding: 7,
            marginBottom: 20,
          }}
        />
        <p>{message}</p>
        <Rating name="read-only" precision={0.5} value={ratting} readOnly />
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          <span style={{ fontWeight: 500, color: "green" }}>{userName}</span>
        </p>
      </div>
    );
  };

export default Card;