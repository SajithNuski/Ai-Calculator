import { useState } from "react";

function App() {


    const [Expression , setExpression ] = useState("");
    const [result , setResult ] = useState("");
    const [aiMesaage,setAiMessage]=useState("Type an expressiona and click =");
    
    const [loading,setLoading]=useState(false);

    const handleClick=(value)=>{
        setExpression((pre)=>pre+value);
        console.log(value);
    }

    const handleClear=()=>{
        setExpression("");
        setResult("");
        setAiMessage("Type an expressiona and click =");
        setLoading(false);
    }

    const handleDelete=()=>{
        setExpression((pre)=>pre.slice(0,-1));
        setResult("");
        setAiMessage("Type an expressiona and click =");
        setLoading(false);
    }


  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl py-10 mx-auto">
          <div>
            <h1 className="text-5xl font-bold text-center text-white">
              AI-Powered Smart Calculator
            </h1>
          </div>

          {/* two column right cal and left ai panel */}
          <div className="grid gap-6 mt-6 lg:grid-cols-2">
            <div className="p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
              <div className="mb-4">
                <div className="text-white/80 text-xs uppercase">  Expressions </div>
                <div className="text-white text-lg min-h-[48px]">{Expression || "0"}</div>
                <div className="h-px bg-white/10 my-3"></div>
                <div className="text-white/80 text-xs uppercase">  Result </div>
                <div className="text-white text-lg min-h-[48px]">test</div>
              </div>

              {/* keypad */}
              <div className="grid grid-cols-4 gap-2">
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClear()}>C</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleDelete()}>del</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("%")}>%</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("/")}>/</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("7")}>7</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("8")}>8</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("9")}>9</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("*")}>*</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("4")}>4</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("5")}>5</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("6")}>6</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("-")}>-</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("1")}>1</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("2")}>2</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("3")}>3</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("+")}>+</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick("0")}>0</button>
                <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" onClick={()=>handleClick(".")}>.</button>
                <button className="col-span-2 p-3 text-white rounded-lg bg-white/10 hover:bg-white/20">=</button>
              </div>
            </div>
            {/* Ai explaination box */}
            <div className="p-5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 relative">
              <div className="flex items-center justify-between">

              <h2 className="text-white/80 text-xs uppercase">Ai Explain</h2>
              <button className="p-3 text-white rounded-lg bg-white/10 hover:bg-white/20" >Explain</button>
              </div>
              <p className="mt-2 text-white/80 text-sm min-h-[180px]">waiting for response ... </p>

              {/* bottom privacy */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] w-full px-3 text-center text-white/40">
                Privacy: We only send the finall expressions and results when you click "Ask AI". 
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
