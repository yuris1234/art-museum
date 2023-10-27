import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import harvardArt from "./data/harvardArt";

function App() {
  return (
    // <div>
      // <h1> Hello from App </h1>
      <GalleryNavigation records={harvardArt.records}/>
    // </div>
  );
}

export default App;
