import { useState } from "react";
import { InputField } from "./components/InputField";
import { DataTable } from "./components/DataTable";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Components Playground</h1>

      <h2 className="my-2">InputField</h2>
      <InputField
        label="Loading Input"
        placeholder="Please wait..."
        value=""
        onChange={() => {}}
        loading
        variant="filled"
        size="md"
      />

      <p className="my-4">You typed: {email}</p>

      <h2 className="my-3">DataTable</h2>
      <DataTable
        data={[
          { id: 1, name: "Alice", email: "alice@example.com" },
          { id: 2, name: "Bob", email: "bob@example.com" },
          { id: 3, name: "Aakash", email: "onicgaming@gmial.co" },
        ]}
        columns={[
          { key: "name", label: "Name" },
          { key: "email", label: "Email" },
        ]}
      />
    </div>
  );
}

export default App;