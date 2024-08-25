import React from 'react'

import PropTypes from "prop-types";

import { lastUpdate, newsChannel, summary } from '../../common/common';


import './NewsDetails.scss'




const NewsDetails = (props) => {

    // destructuring the props
    const { channel, published } = props

    return (
        <>

            <details className='details'>
                <summary className='summary'>
                    {
                        summary
                    }
                </summary>

                <p className='channel'>
                    <span>
                        channel:&nbsp;
                    </span>
                    {
                        newsChannel(channel)
                    }
                </p>

                <p className="published">
                    <span>
                        Published At:&nbsp;
                    </span>
                    {
                        lastUpdate(published)
                    }
                </p>
            </details>

        </>
    )
}



NewsDetails.propTypes = {
    channel: PropTypes.string,
    published: PropTypes.string,
}

export default NewsDetails
