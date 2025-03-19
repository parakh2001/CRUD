import { useState } from "react";
import { ModelForm } from "./components/ModelForm";
import { Navbar } from "./components/Navbar";
import { TableList } from "./components/TableList";

function App() {
  return (
    <div>
      <Navbar />
      <TableList />
      <ModelForm />
    </div>
  );
}
export default App