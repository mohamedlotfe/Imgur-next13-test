import Link from "next/link";
import Image from "next/image";

export default function Item({ title, datetime, links }) {
  const url = links && links[0] && links[0]?.link;
  const imageHash = links && links[0] && links[0]?.id
  return (
    <div className="img-packet">
      <Link href={`/${imageHash}`}>
        <Image  className="img-item" src={url} width={200} height={200} alt={title} priority />
      </Link>
      <h1>{title}</h1>
      <h2>{new Date(datetime).toDateString()}</h2>
    </div>
  );
}
