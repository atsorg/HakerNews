import logo from "./logo.svg";
import "./App.css";
import { getTopStories } from "./api";
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
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
getTopStories();
