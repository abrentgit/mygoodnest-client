import React from 'React';
import EntrySummary from './EntrySummary';

class EntriesList extends React.Component {
  render() {
    return (
      <div className="Entries-List">
        <EntrySummary />
        <EntrySummary />
        <EntrySummary />
        <EntrySummary />
      </div>
    );
  }
}

export default EntriesList;
