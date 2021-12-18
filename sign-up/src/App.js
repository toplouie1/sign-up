import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="outsideContainer">
				<div className="insideContainer">
					<h2>Join the </h2>
					<h2>community</h2>
					<p>Take your art to the next level. Get it</p>
					<p>seen by millions of people</p>
					<button>join with Facebook</button>
					<p>or</p>
					<form>
						<div>
							<input
								className="firstInput"
								type="text"
								placeHolder="First name"
							/>
							<input
								className="firstInput"
								type="text"
								placeHolder="Last name"
							/>
						</div>
						<br />

						<input type="text" placeHolder="Email" />
						<br />
						<br />

						<input type="text" placeHolder="password" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
