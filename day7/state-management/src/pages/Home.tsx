import ComponentA from "@/components/ComponentA";

function Home() {
  const name: string = "Budi";
  return (
    <div>
      <p>HomePage</p>
      <ComponentA name={name} />
    </div>
  );
}
export default Home;
