import React ,{ Component }from "react";
import { FiMonitor, FiSmartphone, FiImage } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiMonitor />,
        title: 'Web Design & Development',
        description: 'I\'ve been slinging code for four years now, but designing for even longer.',
        href: 'web-development-details'
    },
    {
        icon: <FiImage />,
        title: 'Graphic Design',
        description: 'Designing makes my he(ART) sing.',
        href: 'graphic-design-details'
    },
    {
        icon: <FiSmartphone />,
        title: 'Mobile App Design',
        description: 'Constantly trying to recreate that feeling of when I first saw Spotify\'s dark UI 😍.',
        href: 'mobile-app-details'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={`${val.href}`}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title" style={{color: "#000073"}}>{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
