import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="outsideContainer">
				<div className="insideContainer">
					<h2>
						Join the <br /> community
					</h2>
					<p>
						Take your art to the next level. Get it
						<br /> seen by millions of people
					</p>
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
						<br />
						<br />
						<button>Create New Account</button>
					</form>
					<p>
						By joining. you agree to out terms of <br /> Serviceand Privacy
						Policy
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
