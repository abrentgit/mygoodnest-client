import React from 'react';

// MOOD REPORT PROMPTS AT DASH

export class Dashboard extends React.Component {
  render() {
    return (
      <form>
        <label>
          <div>How are you feeling today overall?</div>
          <select>
            <option value="Down">Down</option>
            <option value="Okay">Okay</option>
            <option value="Good">Feelin' Good</option>
            <option value="Happy">Happy</option>
          </select>
        </label>
        <label>
          <div>How many hours of sleep did you get last night?</div>
          <select>
            <option value="option1">1-3</option>
            <option value="option2">4-6</option>
            <option value="option3">6-8</option>
            <option value="option4">8 or more</option>
          </select>
        </label>
        <label>
          <div>What self-care if any have you done today?</div>
          <input type="checkbox" name="selfcare1" value="Yoga"> Yoga<br>
          <input type="checkbox" name="selfcare2" value="Meditation"> Meditation<br>
          <input type="checkbox" name="selfcare3" value="Exercise"> Exercise<br>
          <input type="checkbox" name="selfcare4" value="Ate-Well"> Ate Well<br>
          <input type="checkbox" name="selfcare7" value="Walk"> Walk <br>
          <input type="checkbox" name="none" value="None"> None <br>
        </label>
        <label>
          <div>What's on your mind?</div>
          <textarea />
          <textarea />
        </label>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}
