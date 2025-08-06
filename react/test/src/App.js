import './App.css';

function InfoBox(props){
  return(
    <div>
      <h1>headline: {props.headline}</h1>
      <h1>article: {props.article}</h1>
      <h1>key topics:{props.key_topics}</h1>
    </div>
  );
}

function App() {
  return (w
    <div className="App">
     <InfoBox headline={"usa bombed"} article={"james gunn"} key_topics={"usa bombed"}/>
    </div>
  );
}

export default App;
