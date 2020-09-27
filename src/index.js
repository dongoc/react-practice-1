// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';

// Create a React component
const App = () => {
  return (
    <div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
				</div>
				Are you sure you want to do this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 4:45PM" 
					content="Nice blog post!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>   
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 2:00AM" 
					content="I like banana"	
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>  
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timeAgo="Yesterday at 5:00PM" 
					content="No way!"
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>   
    </div>
  );
}

// Take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)