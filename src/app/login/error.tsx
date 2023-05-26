"use client";

export default function Error({ error }: { error: Error }) {
  return <p>{error.message}</p>;
}
