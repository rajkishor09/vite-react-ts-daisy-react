import { useEffect, useState } from "react";
import "./App.css";
import { Button, useTheme } from "react-daisyui";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="m-4 space-x-2">
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="accent">accent</Button>
      </div>
    </div>
  );
}

export default App;
