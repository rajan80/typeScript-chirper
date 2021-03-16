import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddChirp from "./components/AddChirp";

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <AddChirp />
        </Route>
      </Switch>
    </BrowserRouter>
    //<main className="container my-5">
    //	<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
    //</main>
  );
};

export interface IAppProps {}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
