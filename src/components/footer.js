import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    console.log(data.site.siteMetadata.author)
    
    return (
        <footer>
            <p>Created by {data.site.siteMetadata.author}, © 2019</p>
        </footer>
    )
}

export default Footer