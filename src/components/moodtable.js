import React from 'react';

export class Moodtable extends React.Component {
  render() {
    return (
      <div>
        <h2>Your Mood Tracker</h2>
        <table>
          <tr>
            <th>Moods and Activites</th>
            <th>Tallied</th>
          </tr>
          <tr>
            <td>Super</td>
            <td>Good</td>
            <td>Okay</td>
            <td>Dump</td>
            <td>Good Sleep Days</td>
            <td>Days Meditated</td>
            <td>Ate Well Days</td>
            <td>Yoga Days</td>
          </tr>
          <tr>
            <th>Numbers Placeholder</th>
          </tr>
        </table>
      </div>
    );
  }
}

// PAGE tdAT HAS ANSWERS TO MOOD RATINGS TALLIED

// EACH CATEGORY IS BROKEN DOWN INTO TITLE AND NUMBER OF INSTANCES BELOW IT

// RENDERS DOWN DAYS, GOOD DAYS, SUPER DAYS OKAY DAYS

// EXERCISE, MEDITATION, EAT WELL, YOGA, SLEEP
