import { useState } from 'react'
import './App.css'

function App() {

  const emmentalize = (input: string): string => {
    let result: string = "";
    for(let i: number = 0; i < input.length; i++) {
      result += "#" + input.charCodeAt(i);
    }
    return result;
  }

  const deemmentalize = (input: string): string => {
    let result: string = "";
    let currentCharCode: number = 0;
    for(let i: number = 0; i <= input.length; i++) {
      if(i == input.length || input.charAt(i) == "#") {
        if(currentCharCode > 9) {
          result += String.fromCharCode(currentCharCode);
        }
        currentCharCode = 0;
      }
      else if(input.charCodeAt(i) >= "0".charCodeAt(0) && input.charCodeAt(i) <= "9".charCodeAt(0)) {
        currentCharCode *= 10;
        currentCharCode += parseInt(input.charAt(i));
      }
    }
    return result;
  }

  const printText = (input: string): string => {
    let result: string = "";
    for(let i: number = 0; i < input.length; i++) {
      result += "#" + input.charCodeAt(i) + ".";
    }
    return result;
  }

  const [outputText, setOutputText] = useState("Output will appear here");
  const [inputText, setInputText] = useState("");
  return (

    <div className="container mx-auto">
      <h1 className="font-mono text-6xl font-bold text-center drop-shadow-lg pt-6 text-green-950">Emmentool</h1>
      <div className='py-6  text-green-950 text-lg drop-shadow-sm'>
        This tool lets you convert text to the form that can easily be pushed onto the stack
        in the esoteric programming languge <a href="https://esolangs.org/wiki/Emmental">Emmental</a>. In this language,
        the only way to do control flow is by mapping symbols to program strings, but only numbers can actually be placed
        onto the stack. For that reason, Emmental sub programs are often embedded within larger emmental programs as lists
        of ASCII codes preceeded by "#". This tool lets you convert a string, which in practice is either printed text or
        Emmental sub-programs, into this pushable form. Hooray! :)

        <br></br>
        <br></br>
        I also may have made this to get better at Tailwind. :P
      </div>
      <div className="p-6 flex flex-row">
        <textarea
          placeholder="Type something here..."
          className="rounded-md p-1 mx-6 font-mono text-lg basis-5/12 h-96 drop-shadow-lg text-slate-800 bg-slate-50"
          style={{resize: "none"}}
          onChange={(event): void => {
            setInputText(event.target.value);
          }}
        >

        </textarea>

        <div className="text-center my-auto flex-col basis-1/6">
          <button
            className="my-2 p-2 font-bold bg-blue-800 text-slate-200 h-16 drop-shadow-md hover:bg-blue-700 active:bg-blue-950 active:drop-shadow-none rounded-lg text-xl"
            onClick={(): void => {
              setOutputText(emmentalize(inputText));
            }}
          >
            Emmentalize!
          </button>
          <button
            className="my-2 p-2 font-bold bg-purple-800 text-slate-200 h-16 drop-shadow-md hover:bg-purple-700 active:bg-purple-950 active:drop-shadow-none rounded-lg text-xl"
            onClick={(): void => {
              setOutputText(deemmentalize(inputText));
            }}
          >
            Deemmentalize!
          </button>

          <button
            className="my-2 p-2 font-bold bg-red-800 text-slate-200 h-16 drop-shadow-md hover:bg-red-700 active:bg-red-950 active:drop-shadow-none rounded-lg text-xl"
            onClick={(): void => {
              setOutputText(inputText.split('').reverse().join(''));
            }}
          >
            Reverse!
          </button>

          <button
            className="my-2 p-2 mx-2 font-bold bg-green-800 text-slate-200 h-16 drop-shadow-md hover:bg-green-700 active:bg-green-950 active:drop-shadow-none rounded-lg text-xl"
            onClick={(): void => {
              setOutputText(printText(inputText));
            }}
          >
            Print Text!
          </button>
        </div>
        <div
          className="overflow-y-auto rounded-md p-1 mx-6 font-mono text-lg basis-5/12 h-96 drop-shadow-lg text-white bg-slate-800"
          style={{resize: "none", whiteSpace: "pre-line"}}
        >
          {outputText}
        </div>

      </div>
    </div>
  )
}

export default App
