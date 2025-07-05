import Link from "next/link";
import Navbar from "./componets/navbar";
import AlgorithmCard from "./componets/AlgorithmCard";
import Footer from "./componets/footer";
import About from "./componets/about";

const AlgorithmChoices = [
    {
        key: 1,
        title: "N-Queens",
        description: "Find the perfect solution for your needs.",
        routerPath: "NQueens",
        imagePath: "/test.jpg",
    },
    {
        key: 2,
        title: "Merge Sort",
        description: "Find the perfect solution for your needs.",
        routerPath: "MergeSort",
        imagePath: "/test.jpg",
    },
    {
        key: 3,
        title: "Parallel Merge",
        description: "Find the perfect solution for your needs.",
        routerPath: "ParallelMerge",
        imagePath: "/test.jpg",
    },
    {
        key: 4,
        title: "2-3 Tree",
        description: "Find the perfect solution for your needs.",
        routerPath: "23Tree",
        imagePath: "/test.jpg",
    }
];

export default function Home() {
  return (
   <main>
        <Navbar/>
        <About/>
        <div className="grid grid-cols-2 gap-4 m-5">
            {AlgorithmChoices.map((e) => {
                    return <AlgorithmCard key = {e.key} title={e.title} description={e.description} routerPath={e.routerPath} imagePath={e.imagePath}/>;
                })}
        </div>
        <Link href = "/Users"> users </Link>
        <Footer/>
   </main>
  );
}
