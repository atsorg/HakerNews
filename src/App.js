// import logo from "./logo.svg";
import "./App.css";
import { getTopStories } from "./api";
import { Rheader } from "./rheader"
import Home from "./home.";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Rheader></Rheader>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
getTopStories();
