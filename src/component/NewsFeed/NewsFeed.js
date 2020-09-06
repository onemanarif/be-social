import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './NewsFeed.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        
    },
});
const NewsFeed = (props) => {
    
    const classes = useStyles();
    const {title, body, id} = props.posts;
    return (
        <div className="displyStyle">

            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to = {`News/${id}`}>
                    <Button size="small" color="primary" >
                        View More Detail
                    </Button>
                    </Link>
                </CardActions>
            </Card>
    </div>
    );
};

export default NewsFeed;