import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col justify-center items-center gap-2 w-full h-screen">
          <div className="flex justify-center text-xl font-semibold w-full text-center">
            <p>Find your digital solution in minutes:</p>
            <Link
              href={`https://quiz.nevorahq.com/en`}
              className="text-blue-500 underline"
            >
              quiz
            </Link>
          </div>
          <div className="flex justify-center text-xl font-semibold w-full text-center">
            <p>Alege soluția digitală în câteva minute:</p>
            <Link
              href={`https://quiz.nevorahq.com/ro`}
              className="text-blue-500 underline"
            >
              quiz
            </Link>
          </div>
          <div className="flex justify-center text-xl font-semibold w-full text-center">
            <p>Подберите digital-решение за пару минут:</p>
            <Link
              href={`https://quiz.nevorahq.com/ru`}
              className="text-blue-500 underline"
            >
              quiz
            </Link>
          </div>
        </div>
    </div>
  );
}
