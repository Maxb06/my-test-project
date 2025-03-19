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
  { id: "8", firstName: "Alison", lastName: "Smithonian", age: 13 },
  { id: "9", firstName: "Rob", lastName: "Johnny", age: 26 },
  { id: "10", firstName: "tonia", lastName: "Smiterson", age: 45 },
  { id: "11", firstName: "Milhouse", lastName: "Von Outen", age: 29 },
  { id: "12", firstName: "Bart", lastName: "Brownies", age: 11 },
  { id: "13", firstName: "Marge", lastName: "Millerson", age: 30 },
  { id: "14", firstName: "Homer", lastName: "Wilsonn", age: 22 },
  { id: "15", firstName: "Maggy", lastName: "Doe", age: 3 },
  { id: "16", firstName: "Lisa", lastName: "Jontson", age: 8 },
  { id: "17", firstName: "Nelson", lastName: "Montfort", age: 53 },
  { id: "18", firstName: "Wellon", lastName: "Smiter", age: 68 },
  { id: "19", firstName: "Ned", lastName: "Flanders", age: 60 },
  { id: "20", firstName: "Montgomery", lastName: "Burns", age: 93 },
  { id: "21", firstName: "Margy", lastName: "pilsom", age: 60 },
  { id: "22", firstName: "Maggy", lastName: "Doert", age: 3 },
  { id: "23", firstName: "Lisa", lastName: "Jon", age: 8 },
  { id: "24", firstName: "Colonel", lastName: "Kentucky", age: 53 },
  { id: "25", firstName: "Wellon", lastName: "Smit", age: 68 },
  { id: "26", firstName: "Ned", lastName: "Flands", age: 17 },
  { id: "27", firstName: "Montgomery", lastName: "Turns", age: 93 },
  { id: "28", firstName: "Emmanuelle", lastName: "nilson", age: 60 },
  { id: "29", firstName: "Alicya", lastName: "Smeth", age: 23 },
  { id: "30", firstName: "Bob", lastName: "Jonsong", age: 28 },
  { id: "31", firstName: "Alicia", lastName: "Smiters", age: 23 },
  { id: "32", firstName: "Bobby", lastName: "John", age: 48 },
  { id: "33", firstName: "Charly", lastName: "Charleroi", age: 19 },
  { id: "34", firstName: "Dave", lastName: "Miller", age: 31 },
  { id: "35", firstName: "Emma", lastName: "bilson", age: 25 },
  { id: "36", firstName: "Alison", lastName: "Smithonian", age: 13 },
  { id: "37", firstName: "Rob", lastName: "Johnny", age: 26 },
  { id: "38", firstName: "tonia", lastName: "Smiterson", age: 45 },
  { id: "39", firstName: "Milhouse", lastName: "Von Outen", age: 29 },
  { id: "40", firstName: "El Barto", lastName: "Brownies", age: 11 },
  { id: "41", firstName: "Marge", lastName: "Millerson", age: 30 },
  { id: "42", firstName: "Homer", lastName: "Simps", age: 22 },
  { id: "43", firstName: "Maggy", lastName: "Doe", age: 3 },
  { id: "44", firstName: "Lisa", lastName: "Jontson", age: 8 },
  { id: "45", firstName: "Nelson", lastName: "Montfort", age: 53 },
  { id: "46", firstName: "Wellon", lastName: "Smiter", age: 68 },
  { id: "47", firstName: "Ned", lastName: "Flanders", age: 17 },
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
  { id: "58", firstName: "Bob", lastName: "Johnson", age: 28 },
  { id: "59", firstName: "Alicia", lastName: "Smiters", age: 23 },
  { id: "60", firstName: "Bobby", lastName: "John", age: 48 },
  { id: "61", firstName: "Comics", lastName: "Saler", age: 39 },
  { id: "62", firstName: "Dave", lastName: "Miller", age: 31 },
  { id: "63", firstName: "Emma", lastName: "Wilson", age: 25 },
  { id: "64", firstName: "Alison", lastName: "Smithonian", age: 13 },
  { id: "65", firstName: "Rob", lastName: "Johnny", age: 26 },
  { id: "66", firstName: "tania", lastName: "Smiterson", age: 45 },
  { id: "67", firstName: "Milhouse", lastName: "Von Outen", age: 29 },
  { id: "68", firstName: "Bartholome", lastName: "Simon", age: 11 },
];

const columns: ColumnDef<Person>[] = [
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "age", label: "Age" },
];

function App() {
  return (
    <EasyTableV2
      data={data}
      columns={columns}
      pagination
      itemsPerPage={10}
      search 
    />
  );
}
export default App;
