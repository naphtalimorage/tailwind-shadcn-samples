import { Button } from "./components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <>
      <div className="bg-yellow-500">
        <Button>Click Me</Button>
      </div>
      <div className="px-6 ">
        <Tabs defaultValue="account" className="w-[400px] ">
          <TabsList>
            <TabsTrigger value="account">Movies</TabsTrigger>
            <TabsTrigger value="password">Tv Shows</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="account">
          Make changes to your account here.
        </TabsContent> */}
          {/* <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
      </div>
    </>
  );
}

export default App;
