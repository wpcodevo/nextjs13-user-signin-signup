import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-ct-blue-600 min-h-screen pt-20">
        <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <p className="text-3xl font-semibold">
            Implement JWT Authentication in Next.js 13 App Directory
          </p>
        </div>
      </section>
    </>
  );
}
