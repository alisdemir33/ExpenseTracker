import './Header.css';
const Header = (props) => {
    return <div className="header"> <h2>{props.text + '('+props.count+') items'} </h2></div>
}

export default Header; 