import React from 'react';
import { Card, CardContent, CardMedia, Typography} from '@mui/material';

const Cards = () => {
    const isMobile=window.innerWidth <=600
    return (
        <div className={`cards-container ${isMobile ? 'mobilee' : 'desktop'}`}>
        <Card className='card'>
        <CardMedia 
            className='media' 
            sx={{height: 80, width: 120}}
            image='https://pluspng.com/img-png/mission-png-1121.png'
        />
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                mission
            </Typography>
            <Typography variant="body2" className='body2'>
                A design mission statement incorporates the overall UX strategy by guiding and 
                aligning design decisions with organizational goals. It fosters consistent, 
                purposeful design choices, enhancing the user experience across products 
                and platforms.
            </Typography>
        </CardContent>
        </Card>
        <Card className='card'>
        <CardMedia 
            className='media' 
            sx={{height: 80, width: 120}}
            image='https://tse1.mm.bing.net/th?id=OIP.OTicFsoACn1V0mVS39ZTNAHaFL&pid=Api&P=0&h=180'
        />
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                vision
            </Typography>
            <Typography variant="body2" className='body2'>
                The essence of the design process is to envision novel solutions in order 
                to meet certain real or perceived needs and express a certain intention through 
                novel interactions and relationships.While science tends to focus on how 
                the world is and how it came to be — an essentially backward looking activity 
                that may venture to predict the outcome of experiments based on abstract linear 
                extrapolations from past observations — design tends to focus on how the world 
                could be in the future and proposes.
            </Typography>
        </CardContent>
        </Card>
        <Card className='card'>
        <CardMedia 
            className='media' 
            sx={{height: 80, width: 120}}
            image='https://www.hemlingtonhallacademy.co.uk/wp-content/uploads/2018/10/history-clipart.jpg'
        />
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                history
            </Typography>
            <Typography variant="body2" className='body2'>
                The human capacity to design has remained constant even though 
                its means and methods have altered, in parallel to technological, 
                organizational, and cultural changes. The historical evolution 
                of design argues that design, although a unique and unchanging skill, 
                has manifested itself in different ways throughout time. The diversity 
                of concepts and practices in modern design is explained by the layered 
                nature of the evolution of design. It is difficult to determine exactly 
                when humans began to change their environment to a significant degree, 
                or in other words to design.
            </Typography>
        </CardContent>
        </Card>
        <Card className='card'>
        <CardMedia 
            className='media' 
            sx={{height: 80, width: 120}}
            image='https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/4136465/2150/1620/m1/fpnw/wm0/work2-.jpg?1521104546&s=3556f2b78bc57bcd28c834fb1f48468d'
        />
        <CardContent>
            <Typography className='typo' color="text.secondary" gutterBottom>
                work
            </Typography>
            <Typography variant="body2" className='body2'>
                Work design refers to the content and organisation of one’s 
                work tasks, activities, relationships and responsibilities.
            </Typography>
        </CardContent>
        </Card>
        </div>
    )
}

export default Cards