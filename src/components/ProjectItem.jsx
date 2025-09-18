import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';


import { styled } from '@mui/material/styles';
import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


const ProjectItem = ({ title, subheader, gitLink, image, description, webLink   })=>{
    const [expanded, setExpanded] = useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
        })(({ theme }) => ({
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        variants: [
            {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
            },
            {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
            },
        ],
        }));


    const handleGitLink = ()=>{
      window.open(gitLink,'_blank', 'noopener,noreferrer')
    }

    const handleWebLink = ()=>{
      window.open(webLink,'_blank', 'noopener,noreferrer')
    }


    return(
        
        <Card sx={{ width: 300 }}>
                <CardHeader 
                  sx={{backgroundColor:window.primary, color:window.custom.white}}
                  title={title}
                  subheader={subheader}
                  slotProps={{subheader:{ color: window.secondary }}}
                  action={
                      <>
                        { webLink  && 
                          <IconButton  aria-label="" onClick={handleWebLink} >
                            <LanguageRoundedIcon sx={{ color: window.custom.blueLight, width:32, height: 32 }} />
                          </IconButton>  
                        }
                        
                        { gitLink  && 
                        <IconButton  aria-label="" onClick={handleGitLink} >
                          <GitHubIcon sx={{ color: window.custom.blueLight, width:30, height: 30 }} />
                        </IconButton>
                        }

                        
                        
                        <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon sx={{ color: ' #FFFFFF' }} />
                        </ExpandMore>
                      </>
                  }
                />
                <CardMedia
                  component="img"
                  height="170"
                  image={image}
                  alt="project image"
                  sx={{pb:1, objectFit:'scale-down'}}
                  
                />
                
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
               
        
    )

}

export default ProjectItem

