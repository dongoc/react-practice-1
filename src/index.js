// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js'

// Create a React component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
				author="Sam" 
				timeAgo="Today at 4:45PM" 
				content="Nice blog post!"
				avatar={faker.image.avatar()}
			/>
      <CommentDetail 
				author="Alex" 
				timeAgo="Today at 2:00AM" 
				content="I like banana"	
				avatar={faker.image.avatar()}
			/>
      <CommentDetail 
				author="Jane" 
				timeAgo="Yesterday at 5:00PM" 
				content="No way!"
				avatar={faker.image.avatar()}
			/>
    </div>
  );
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)