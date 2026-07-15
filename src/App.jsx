function App() {

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
                <div className="text-white text-lg min-h-[48px]">0</div>
                <div className="h-px bg-white/10 my-3"></div>
                <div className="text-white/80 text-xs uppercase">  Result </div>
                <div className="text-white text-lg min-h-[48px]">test</div>
              </div>
            </div>
              <div>World</div>
            <div>World</div>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
