import React from 'react';

export class Dashboard extends React.Component {
  render() {
    return (
      <form>
        <label>
          <div>How are you feeling today?</div>
          <select>
            <option value="Down">Down</option>
            <option value="Okay">Okay</option>
            <option value="Good">Feelin' Good</option>
            <option value="Super">Super Duper</option>
          </select>
        </label>
        <label>
          <div>What self-care practices have you done today?</div>
          <select>
            <option value="Exercise">Exercise</option>
            <option value="Meditation">Meditation</option>
            <option value="Eat">Ate Clean</option>
            <option value="Yoga">Yoga</option>
            <option value="Sleep">Good Sleep</option>
          </select>
        </label>
        <label>
          <div>What's on your mind?</div>
          <textarea />
        </label>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

// export Dashboard default;
