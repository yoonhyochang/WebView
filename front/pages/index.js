import dynamic from "next/dynamic";

const ViewerCornerstone = dynamic(() => import("../components/ViewerCornerstone"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

function HomePage() {
  return (
    <div>
      <ViewerCornerstone />
    </div>
  );
}

export default HomePage;
