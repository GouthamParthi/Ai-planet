import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Search from "./components/Search/Search";
import SortByUpload from "./components/SortByUpload/SortByUpload";
import TabsWithIndicator from "./components/TabsWithIndicator/TabsWithIndicator";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Search />
      <TabsWithIndicator />
      <SortByUpload />
    </div>
  );
}
