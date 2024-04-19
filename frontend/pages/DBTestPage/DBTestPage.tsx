import useApplicationData from "../../src/hooks/useApplicationData";

function DBTestPage() {
  const { notes, fetchData } = useApplicationData();

  console.log("Notes", notes);
  console.log("Notes.map", notes.map);

  return (
    <>
      <div>Hello</div>
      <button onClick={fetchData}>Reload</button>
      <div>
        <h2>Notes:</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note.content}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DBTestPage;
