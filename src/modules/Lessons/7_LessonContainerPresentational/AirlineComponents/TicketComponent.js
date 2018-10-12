import React from "react";
import planeLogo from '../../../../static/img/airplane.svg';
import bagLogo from '../../../../static/img/briefcase.svg';
import forkLogo from '../../../../static/img/fork.svg';

const CITY_CODES = {
    Lahore: 'LHE',
    Islamabad: 'ISL',
    Karachi:'KHI'
};

const LogoTitle = ({title}) => <div>{title}</div>;
const Place = ({place}) => <div className='dim-text'>{CITY_CODES[place]}</div>;
const Time = ({time}) => <div>{time.getHours()}:{time.getMinutes()}</div>;
const DateComp = ({date}) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return <div>{date.toLocaleDateString('en-US', options)}</div>

};
const Stops = ({stops}) => <div>{stops > 0 ? stops : 'Nonstop'}</div>;
const Price = ({price}) => <div>{`Rs. ${price}`}</div>;

const Duration = ({time}) => {
    let hours = parseInt(time/60), minutes = time - 60;
    return <div>{`${hours} hr ${minutes} min`}</div>;
};


const Icon = ({logo, size = '40'}) => {
    return <img style={{width: `${size}px`, height: `${size}px`}} src={logo} />;
};

const CostComponent = ({detailsVisible, onDetailsChange, ticketKey}) => {

    const viewDetailsHandler = event => {
        event.preventDefault();
        onDetailsChange(!detailsVisible, ticketKey);
    };

    const btnTxt = detailsVisible ? 'Hide Details' : 'View Details';

    return (
        <div className='row'>
            <div className='col-md-2'>Cost includes</div>
            <div className='col-md-2'>
                <Icon logo={bagLogo} size={20}/>&nbsp;&nbsp;<Icon logo={forkLogo} size={20}/>
            </div>
            <div className='col-md-2'>Economy/Coach</div>
            <div className='col-md-6 offset4'>
                <a onClick={viewDetailsHandler}>{btnTxt}</a>
            </div>
        </div>
    );
};

const TicketDetails = props => {

    let {departure, departureDate, arrival, arrivalDate, duration, flightId, travelClass, airline, pieces,
    weight, unit} = props;

    return (
        <div className='container'>
            <br/>
            <div className='row'>
                <div className='col-md-2'>
                    <Time time={departureDate}/>
                    <DateComp date={departureDate}/>
                </div>
                <div className='col-md-2'>
                    <Icon logo={planeLogo}/>
                </div>
                <div className='col-md-2'>
                    <Time time={arrivalDate}/>
                    <DateComp date={arrivalDate}/>
                </div>
                <div className='col-md-6'>
                    <Duration time={duration}/>
                </div>
            </div>
            <div>
                <div>{`${departure} (${CITY_CODES[departure]}) to ${arrival} (${CITY_CODES[arrival]})`}</div>
                <div>{flightId}</div>
                <div>{travelClass}, {airline}</div>
                <div>{`${pieces} pc(s) - ${weight} ${unit}`}</div>
            </div>
        </div>
    );
};


const Ticket = props => {

    let {airline, stops, duration, currentKey, detailedTicketKey, onDetailShow} = props;
    let {departure, departureDate, arrival, arrivalDate} = props['details'];
    let {totalFare, totalTax} = props['priceDetails'];
    let bg_info = props['details']['bg_info'];
    let {flightId, class: travelClass} = props['details']['intervals'][0];
    departureDate = new Date(departureDate);
    arrivalDate = new Date(arrivalDate);

    return (
        <div className='container'>
            <div className='row'>
                <div className='row col-md-10'>
                    <div className='col-md-2'><LogoTitle title={airline}/></div>
                    <div className='col-md-1'>
                        <Place place={departure}/>
                        <Time time={departureDate}/>
                    </div>
                    <div className='col-md-1'><Icon logo={planeLogo}/></div>
                    <div className='col-md-1'>
                        <Place place={arrival}/>
                        <Time time={arrivalDate}/>
                    </div>
                    <div className='col-md-3'>
                        <div>Duration</div>
                        <Duration time={duration}/>
                    </div>
                    <div className='col-md-3'>
                        <div>Stops</div>
                        <Stops stops={stops}/>
                    </div>
                </div>
                <div className='col-md-2'>
                    <Price price={totalFare + totalTax}/>
                    <button>Select</button>
                </div>
            </div>
            {
                currentKey === detailedTicketKey && <TicketDetails
                    departureDate={departureDate}
                    arrivalDate={arrivalDate}
                    duration={duration}
                    departure={departure}
                    arrival={arrival}
                    airline={airline}
                    flightId={flightId}
                    travelClass={travelClass}
                    {...bg_info}
                />
            }
            <br/>
            <CostComponent
                detailsVisible={currentKey === detailedTicketKey}
                onDetailsChange={onDetailShow}
                ticketKey={currentKey}
            />
            <br/> <br/>
        </div>
    );
};

export default Ticket;

