import React from 'react';

const AutoPlay = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="ap">AutoPlay</label>
        <input type="checkbox" id="ap" onClick={ () => {props.handleAutoPlayClick()}} />
      </form>
    </div>

  )
}

export default AutoPlay;

// checked = true ?

/// <button type="button" onClick={ () => {props.handleAutoPlayClick()}}>AutoPlay</button>
//           console.log('Props-->:', props, 'Props Event-->:', props.handleAutoPlayClick)
