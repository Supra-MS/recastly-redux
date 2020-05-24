import React from 'react';

const AutoPlay = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="ap">AutoPlay</label>
        <input type="checkbox" id="ap" onClick={ () => { props.handleAutoPlayClick(); }} />
      </form>
    </div>

  )
}

export default AutoPlay;

// console.log('Props-->:', props, 'Props Event-->:', props.handleAutoPlayClick)
