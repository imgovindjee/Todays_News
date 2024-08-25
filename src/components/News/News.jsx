import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'
import { Col, Row } from 'react-bootstrap';
import PropTypes from "prop-types";


import { card, Container, Header } from '../../styledComponents/NewsComponent/News';
import Spinner from '../Spinner/Spinner';

import NewsItem from '../NewsItem/NewsItem';
import nullImage from '../../assets/Images/nullImage.png'

import { endpointPath } from '../../config/API/API';
import { capitaLize, header } from '../../common/common';




const News = (props) => {

    // destructuring the data form the PROPs
    const { newCategory, country } = props;

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)


    const category = newCategory
    const title = capitaLize(category)
    document.title = `${capitaLize(title)} - News`
    const updateNews = async () => {
        try {
            const response = await axios.get(endpointPath(country, category))

            setLoading(true)
            // const parseData = response?.data
            console.log(response.data)
            setArticles(response?.data?.articles)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        updateNews();
    }, [])



    return (
        <>
            {
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <Header>
                            {
                                header(capitaLize(category))
                            }
                        </Header>

                        <Container>
                            <Row>
                                {
                                    articles?.map((element) => {
                                        return (
                                            <Col
                                                sm={12} md={6} lg={4} xl={3} style={card} key={uuidv4()}
                                            >
                                                <NewsItem
                                                    title={element?.title}
                                                    description={element?.description}
                                                    published={element?.publishedAt}
                                                    channel={element?.source.name}
                                                    alt={nullImage}
                                                    publishedAt={element?.publishedAt}
                                                    imageUrl={
                                                        element?.image === null ? nullImage : element?.image
                                                    }
                                                    urlNews={element?.url}
                                                />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </>
                )
            }
        </>
    )
}


News.defaultProps = {
    country: "in",
    newCategory: "general",
};

News.propTypes = {
    country: PropTypes.string,
    newCategory: PropTypes.string,
}

export default News
