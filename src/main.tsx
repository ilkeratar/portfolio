import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


// const client = new ApolloClient({
//   uri: 'https://beta.pokeapi.co/graphql/v1beta',
//   cache: new InMemoryCache(),
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
    <App />

);
