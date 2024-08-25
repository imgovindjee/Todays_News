import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import searchArticle from '../../reduxStore/Action/Action'

import { card, Container, Header } from '../../styledComponents/SearchComponent/Search'
import { Col, Row } from 'react-bootstrap'

import { capitaLize, header, noResults, searching } from '../../common/common'
import Spinner from '../Spinner/Spinner'
import NewsItem from '../NewsItem/NewsItem'

import nullImage from '../../assets/Images/nullImage.png'




const Search = () => {

    // hooks
    // for changing the store data
    const dispatch = useDispatch()


    // real time changing for the data
    const [searchQuery, setSearchQuery] = useState("")
    const [totalArticles, setTotalArticles] = useState(0)
    const { articles, loading } = useSelector((state) => state.search);

    const { query } = useParams()


    // function to capatilize the string
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // rendering of the data when page is being loaded
    useEffect(() => {
        dispatch(searchArticle(query))
    }, [query, dispatch])
    
    useEffect(() => {
        setSearchQuery(query)
        setTotalArticles(articles?.totalArticles)
    }, [query, articles])

    

    document.title =
        totalArticles === 0
            ? noResults
            : loading
                ? searching
                : `${capitalize(searchQuery)} - News`;


    return (
        <>

            {
                loading ? (
                    <Spinner />
                ) : (
                    <>
                        <Header>
                            {
                                totalArticles === 0 ? (
                                    noResults
                                ) : (
                                    header(capitalize(searchQuery))
                                )
                            }
                        </Header>

                        <Container>
                            <Row>
                                {
                                    articles?.articles?.map((element) => {
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

export default Search
