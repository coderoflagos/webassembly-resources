import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   <div className="container">
        <h1 className="App-intro">
         <b> Welcome to <p class="wasm-color">WebAssembly Resources </p></b>
        </h1>

<br/>
<p className="description">
Here are some curated resources to step up in WebAssembly 👀</p>
        </div>

<div class="main">
   
   <h3 class="title">Learning Resources </h3>

        <div className="grid">
          <a href="https://rustwasm.github.io/" className="card">
            <img src="https://i.ibb.co/zSMmfxy/Screenshot-2023-01-21-at-19-29-11.png" className="img-flex" width={310}/>
            <h3>Rust and WebAssembly &rarr;</h3>
            <p>Read the Rust and WebAssembly documentation to learn how to design, develop, test, debug, profile, and publish Rust and WebAssembly libraries and applications.</p>
          </a>

 
          <a href="https://wasmbyexample.dev/home.en-us.html" className="card">
          <img src="https://i.ibb.co/k14cDmR/Screenshot-2023-01-23-at-09-13-46.png" className="img-flex" width={310}/>
            <h3>Wasm By Example &rarr;</h3>
            <p>Wasm By Example is a concise, hands-on introduction to WebAssembly using code snippets and annotated WebAssembly example programs.</p>
          </a>

          <a href="https://madewithwebassembly.com/" className="card">
          <img src="https://i.ibb.co/hM7qFD3/Screenshot-2023-01-23-at-09-33-41.png" className="img-flex" width={310}/>
            <h3>Made with WebAssembly &rarr;</h3>
            <p>Made with WebAssembly is an Open Source showcase of awesome production applications, side projects, and use cases made with WebAssembly.</p>
          </a>
        
          <a href="https://wasmweekly.news/" className="card">
          <img src="https://i.ibb.co/qmMqVq6/Screenshot-2023-01-23-at-10-03-25.png" className="img-flex" width={310}/>
            <h3>WebAssembly Weekly &rarr;</h3>
            <p>A weekly newsletter for keeping on top of what's new in the world of WebAssembly, with tutorials, examples, articles, and more.</p>
          </a>

          <a href="https://github.com/mbasso/awesome-wasm" className="card">
          <img src="https://i.ibb.co/FWrGd4j/Screenshot-2023-01-23-at-10-47-57.png" className="img-flex" width={310}/>
            <h3>Awesome WASM &rarr;</h3>
            <p>Curated list of awesome things regarding WebAssembly (WASM) ecosystem.</p>
          </a>
  

          <a href="https://dev.to/t/webassembly" className="card">
          <img src="https://i.ibb.co/jGL91BV/Screenshot-2023-01-23-at-11-50-47.png" className="img-flex" width={310}/>
            <h3>Dev.to - WebAssembly &rarr;</h3>
            <p>Curated list of awesome things regarding WebAssembly in Dev.to. </p>
          </a>
        
</div>




<h3>WASM CFPs 🎤✨</h3>

<div className="grid">

<a href="https://webassembly-summit.org/?2023" className="card">
          <img src="https://i.ibb.co/Gst7vZj/Screenshot-2023-01-23-at-13-33-26.png" className="img-flex" width={310}/>
            <h3>WebAssembly Summit 2023 &rarr;</h3>
          </a>

          <a href="https://holyjs.ru/en/callforpapers/" className="card">
          <img src="https://i.ibb.co/Y8V0KxJ/Screenshot-2023-01-23-at-14-02-22.png" className="img-flex" width={310}/>
            <h3>Holy JS &rarr;</h3>
          </a>


  </div>

<i>So many resources coming soon... </i>

</div>

<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="coderoflagos" data-description="Support me on Buy me a coffee!" data-message="Thanks for helping me buy coffee." data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>

      </header>
    </div>

  );
}

export default App;
