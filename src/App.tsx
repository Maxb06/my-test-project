import { useState } from "react";
import { EasyTableV2, ColumnDef } from "easyv2-table";

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
};

const data: Person[] = [
  { id: "1", firstName: "Alice", lastName: "Smith", age: 23 },
  { id: "2", firstName: "Bob", lastName: "Johnson", age: 28 },
  { id: "3", firstName: "Alicia", lastName: "Smiters", age: 23 },
  { id: "4", firstName: "Bobby", lastName: "John", age: 48 },
  { id: "5", firstName: "Charline", lastName: "Brown", age: 19 },
  { id: "6", firstName: "Dave", lastName: "Miller", age: 31 },
  { id: "7", firstName: "Emma", lastName: "Wilson", age: 25 },
  { id: "8", firstName: "Alison", lastName: "Hannigan", age: 13 },
  { id: "9", firstName: "Rob", lastName: "Tommy", age: 26 },
  { id: "10", firstName: "tonia", lastName: "Smiterson", age: 45 },
  { id: "11", firstName: "Milhouse", lastName: "Von Outen", age: 29 },
  { id: "12", firstName: "Bart", lastName: "Banger", age: 11 },
  { id: "13", firstName: "Marge", lastName: "Millerson", age: 30 },
  { id: "14", firstName: "Homer", lastName: "Gilson", age: 22 },
  { id: "15", firstName: "Maggy", lastName: "Doe", age: 4 },
  { id: "16", firstName: "Lisa", lastName: "Jontson", age: 8 },
  { id: "17", firstName: "Nelson", lastName: "Montfort", age: 53 },
  { id: "18", firstName: "Wellon", lastName: "Smiter", age: 68 },
  { id: "19", firstName: "Ned", lastName: "Flanders", age: 60 },
  { id: "20", firstName: "Montgomery", lastName: "Burns", age: 93 },
  { id: "21", firstName: "Margy", lastName: "pilsom", age: 60 },
  { id: "22", firstName: "Maggy", lastName: "Doert", age: 5 },
  { id: "23", firstName: "Lisa", lastName: "Joan", age: 9 },
  { id: "24", firstName: "Colonel", lastName: "Kentucky", age: 53 },
  { id: "25", firstName: "Wellon", lastName: "Smit", age: 68 },
  { id: "26", firstName: "Ned", lastName: "Flands", age: 17 },
  { id: "27", firstName: "Montgomery", lastName: "Turns", age: 93 },
  { id: "28", firstName: "Emmanuelle", lastName: "nilson", age: 60 },
  { id: "29", firstName: "Alicya", lastName: "Smeth", age: 23 },
  { id: "30", firstName: "John", lastName: "Jonsong", age: 28 },
  { id: "31", firstName: "Alicia", lastName: "Smiters", age: 23 },
  { id: "32", firstName: "Robbert", lastName: "Jon", age: 48 },
  { id: "33", firstName: "Charly", lastName: "Charleroi", age: 19 },
  { id: "34", firstName: "Dave", lastName: "Miller", age: 31 },
  { id: "35", firstName: "Emma", lastName: "bilson", age: 25 },
  { id: "36", firstName: "Alison", lastName: "Smithonian", age: 13 },
  { id: "37", firstName: "Rob", lastName: "Johnny", age: 26 },
  { id: "38", firstName: "tonia", lastName: "David", age: 45 },
  { id: "39", firstName: "Milhouse", lastName: "Von Outen", age: 29 },
  { id: "40", firstName: "El Barto", lastName: "Brownies", age: 11 },
  { id: "41", firstName: "Marge", lastName: "Millerson", age: 30 },
  { id: "42", firstName: "Homer", lastName: "Simps", age: 22 },
  { id: "43", firstName: "Maggy", lastName: "Doe", age: 2 },
  { id: "44", firstName: "Lisa", lastName: "Jontson", age: 7 },
  { id: "45", firstName: "Nelson", lastName: "Montfort", age: 53 },
  { id: "46", firstName: "Wellon", lastName: "Smiter", age: 68 },
  { id: "47", firstName: "Neddy", lastName: "Smalls", age: 17 },
  { id: "48", firstName: "Montgomery", lastName: "Burns", age: 93 },
  { id: "49", firstName: "Emmanuelle", lastName: "tilsom", age: 60 },
  { id: "50", firstName: "Maggy", lastName: "Doert", age: 3 },
  { id: "51", firstName: "Lisa", lastName: "Jon", age: 8 },
  { id: "52", firstName: "Nelson", lastName: "Monfor", age: 53 },
  { id: "53", firstName: "Wellon", lastName: "Smit", age: 68 },
  { id: "54", firstName: "Ned", lastName: "Flands", age: 17 },
  { id: "55", firstName: "Montgomery", lastName: "Diurns", age: 93 },
  { id: "56", firstName: "Emmanuelle", lastName: "nilson", age: 60 },
  { id: "57", firstName: "Alice", lastName: "Smith", age: 23 },
  { id: "58", firstName: "Bob", lastName: "Tomson", age: 28 },
  { id: "59", firstName: "Alison", lastName: "Sweet", age: 23 },
];

const columns: ColumnDef<Person>[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "age", label: "Age" },
];

function App() {
  const [tableData, setTableData] = useState(data);

  const handleDelete = (id: string) => {
    setTableData(tableData.filter((item) => item.id !== id)); 
  };

  return (
    <EasyTableV2
      data={tableData} 
      columns={columns}
      pagination
      itemsPerPage={10}
      search
      onDelete={handleDelete}
    />
  );
}

export default App;