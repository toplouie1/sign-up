import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="outsideContainer">
				<div className="insideContainer">
					<h2>Join the </h2>
					<h2>community</h2>
					<p>take your art to the next level. Get it</p>
					<p>seen by millions of people</p>
					<button>join with Facebook</button>
					<p>or</p>
					<form>
						<div>
							<input type="text" placeHolder="First name" />
							<input type="text" placeHolder="Last name" />
						</div>
						<input type="text" placeHolder="Email" />
						<input type="text" placeHolder="password" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
