import * as moment from 'moment'
const TopNav = () => {
    const date = new Date();
    return ( 
        <div className="topnav px-3">
           
            { moment().format('MMMM Do YYYY, h:mm a') }
        </div>
     );
}
 
export default TopNav;