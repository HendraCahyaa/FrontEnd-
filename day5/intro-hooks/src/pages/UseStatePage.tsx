import { useState } from "react";

function UseStatePage() {
  const [nama, setNama] = useState("budi");

  const updateNama = () => {
    setNama("joko");
  };

  const [students, setStudents] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const submitStudents = () => {
    if (name === "") {
      return alert("Input tidak boleh kosong");
    }
    setStudents((prev) => [...prev, name]);
    setName("");
  };
  return (
    <div>
      <h1>UseStatePage</h1>
      <p>{nama}</p>
      <button onClick={updateNama}>Update</button>

      <hr />
      <input
        value={name}
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={submitStudents}>Submit</button>
      {students.map((student, index) => {
        return <p key={index}>{student}</p>;
      })}
    </div>
  );
}
export default UseStatePage;
// function UseStatePage() {
//   let nama: string = "budi";

//   const updateNama = () => {
//     nama = "joko";
//   };
//   return (
//     <div>
//       <h1>UseStatePage</h1>
//       <p>{nama}</p>
//       <button onClick={updateNama}>update</button>
//     </div>
//   );
// }
// export default UseStatePage;
