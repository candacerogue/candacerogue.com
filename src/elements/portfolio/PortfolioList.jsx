import React, { Component } from "react";

const PortfolioListContent = [
    {
        project: 'danksweets',
        image: 'image-1',
        category: 'Design & Development',
        title: 'Cannabis Confections x DankSweets Treats complete brand refresh'
    },
    {
        project: 'jessica',
        image: 'image-2',
        category: 'Graphic Design',
        title: 'Album artwork for Jessica Lá Rel\'s f(lux)'
    },
    {
        project: 'blended',
        image: 'image-3',
        category: 'Mobile Design',
        title: 'Blended Sip is a wine game currently in development, designed by muah'
    },
    {
        project: 'reactopt',
        image: 'image-4',
        category: 'Graphic Design',
        title: 'Taking React tool, ReactOpt, to animated levels'
    },
    {
        project: 'john-ketchum',
        image: 'image-5',
        category: 'Design & Development',
        title: 'Custom website for journalist & media boss, John Ketchum'
    },
    {
        project: 'afrochella',
        image: 'image-6',
        category: 'Mobile Design',
        title: 'My love for the Afrochella festival turned into my take on the mobile users\' experience'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href={`/${value.project}-details`}>{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={`/${value.project}-details`}>View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;