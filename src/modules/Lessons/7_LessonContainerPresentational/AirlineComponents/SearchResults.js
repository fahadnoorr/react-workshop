import React, { Component } from 'react';

import Loader from './Loader';
import resultsList from '../../../../util/resultsList';
import Ticket from "./TicketComponent";

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      isLoading: true,
      detailedTicketKey: null
    };
  }

  componentWillMount() {
    setTimeout(
        () => {this.setState({
            results: resultsList,
            isLoading: false
        })}
    , 5000);
  }

  ticketDetailHandler = (show, key) => {
      if (show){
          this.setState({detailedTicketKey: key});
      } else {
          this.setState({detailedTicketKey: null});
      }
  };

  render() {
    const { isLoading, results, detailedTicketKey } = this.state;

    return (
        <section className="info-panel">
          <h2>Search Results</h2>
          <div className="results-body">
            {
              isLoading ? <Loader /> : results.map((ticket, index) =>
                  <Ticket
                      key={index} {...ticket}
                      detailedTicketKey={detailedTicketKey}
                      onDetailShow={this.ticketDetailHandler}
                      currentKey={index}
                  />
              )
            }
          </div>
        </section>
    )
  }
}

export default SearchResults;
