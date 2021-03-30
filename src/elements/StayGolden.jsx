import React ,{ Component }from "react";
import PageHelmet from "../component/common/Helmet";

const LinkTreeList = [
    {
        title: 'Pre-Order Lattes',
        href: 'https://form.jotform.com/210016848160145'
    },
    {
        title: 'Instagram',
        href: 'https://www.instagram.com/staygoldenlattes/'
    },
    {
        title: 'Upcoming Dates',
        href: 'https://www.instagram.com/p/CMXo8Wgh_OR/'
    },
    {
        title: 'Getting Your Food Sale License',
        href: 'https://www.instagram.com/tv/CMQazIvH3mp/?utm_source=ig_web_copy_link'
    }
]


class LinkTree extends Component{
    render(){
        const LinkTreeContent = LinkTreeList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Stay Golden Lattes' />

                {/* Start Logo */}
                {/* <div className="stay-golden-logo text-center">
                    <img src="/assets/images/logo/stay-golden-wave.png" alt="Stay Golden Logo"/>
                </div> */}
                {/* End Logo */}

                {/* Start LinkTree */}
                <div className="stay-golden-row col-lg-12 text-center">
                    <div className="stay-golden-logo text-center">
                        <img src="/assets/images/logo/stay-golden-wave.png" alt="Stay Golden Logo"/>
                    </div>
                    {LinkTreeContent.map( (val , i) => (
                        <div className="content-container" key={i}>
                            <a href={`${val.href}`} target="_blank" rel="noopener noreferrer">
                                <div className="linktree linktree__style--1">
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                 {/* End LinkTree */}

            </React.Fragment>
        )
    }
}
export default LinkTree;
