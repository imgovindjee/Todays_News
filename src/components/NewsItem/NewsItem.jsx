import React from 'react'

import PropTypes from "prop-types";
import { Button, Card } from 'react-bootstrap';

import ArrowIcon from '../../assets/Images/ArrowIcon.svg'
import NewsDetails from '../NewsDetails/NewsDetails';

import './NewsItem.scss'




const NewsItem = (props) => {

    // destructuring the props
    const { imageUrl, alt, description, title, channel, published, urlNews } = props;


    return (
        <>

            <Card className='card'>
                <Card.Img
                    className='card_img'
                    variant="top"
                    src={imageUrl}
                    alt={alt}
                />

                <Card.Body className='card_body'>
                    <Card.Title className='card_title'>
                        {
                            title
                        }
                    </Card.Title>
                    <Card.Text className='card_description'>
                        {
                            description
                        }
                    </Card.Text>

                    <NewsDetails
                        channel={channel}
                        published={published}
                    />

                    <Button
                        className='card_btn card-btn'
                        href={urlNews}
                        target='_blank'
                    >
                        Read More
                        {/* <ArrowIcon className='arrow_icon' /> */}
                        <img src={ArrowIcon} alt="" className="arrow_icon" />
                    </Button>
                </Card.Body>
            </Card>

        </>
    )
}



NewsItem.propTypes = {
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    channel: PropTypes.string,
    urlNews: PropTypes.string,
    published: PropTypes.string,
}



export default NewsItem
