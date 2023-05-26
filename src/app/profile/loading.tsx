import Spinner from "@/components/Spinner";

export default function loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <div className="h-20 w-40 rounded-md shadow-md flex items-center justify-center bg-white">
        <Spinner height="2rem" width="2rem" />
      </div>
    </div>
  );
}
