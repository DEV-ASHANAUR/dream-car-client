import React from 'react';
import { Avatar } from '@mui/material';
const Card = ({ img }) => {
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
        <p>
          Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia.
          Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan
          tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt
          fringilla massa. Etiam hendrerit dolor eget rutrum
        </p>
        <p style={{ fontStyle: "italic", marginTop: 25 }}>
          <span style={{ fontWeight: 500, color: "green" }}>PAULA WILSON</span> ,
          Media Analyst
        </p>
      </div>
    );
  };

export default Card;