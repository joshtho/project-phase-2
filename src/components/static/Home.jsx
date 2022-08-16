import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const Home = () => {
  return (
    <div >
      <h1>The Legend of Zelda: Breath of the Wild Beastiary</h1>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <img alt='battle' className='center' src='https://www.ladbible.com/cdn-cgi/image/width=720,quality=70,format=jpeg,fit=pad,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2F9b77bed85fc989284e65844d91f9d62a.png' />
      </Container>
    </React.Fragment>
    </div>
  )
}

export default Home    