
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100vw;
    background: url(https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80) center/55% ;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: GREY;
    line-height: 1
    

`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG FOR YOU</Heading>
            <SubHeading></SubHeading>
        </Image>
    )
}

export default Banner;


// https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg