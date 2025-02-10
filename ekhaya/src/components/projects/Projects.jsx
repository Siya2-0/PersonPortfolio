import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Projects.css";

export default function Projects() {
    return (
   
      <section className='ProjectSection'>
  
        <h1 className="SectionTitle">Projects.</h1>
 
        
   
      <div className="cardsContainer">
        <div className="card" id="card-1"> 
                <div className="card-phase"><p>Phase 01</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
            <div className="card" id="card-2">
                <div className="card-phase"><p>Phase 02</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
            <div className="card" id="card-3">
                <div className="card-phase"><p>Phase 03</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
            <div className="card" id="card-4">
                <div className="card-phase"><p>Phase 04</p></div>
                <div className="card-title">
                    <p>Date</p>
                    <h1><span>Title</span></h1>
                </div>
            </div>
        
      </div>
      </section>

    );
  }

 
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// export default function ImgMediaCard() {
//   return (
//     <Card>
//       <Box sx={{ display: 'flex', flexDirection: 'row' }}>
//         {/* <CardMedia
//           component="img"
//           alt="green iguana"
//           image="https://previews.123rf.com/images/chrisdorney/chrisdorney1310/chrisdorney131000494/23087294-pass-rubber-stamp-over-a-white-background.jpg"
//         /> */}
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </Box>
//       <CardActions >
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

/*
<Card 
            bg="light"
            text="dark"
            className="custom-card"
          >
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
*/