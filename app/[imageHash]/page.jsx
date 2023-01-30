import Image from "next/image";

export default async function ImageDetail({ params }) {
  const { imageHash } = params;
  console.log(params);
  const res = await fetch(`https://api.imgur.com/3/image/${imageHash}`, {
    headers: {
      Authorization: `Client-ID ${process.env.CLIENT_KEY}`,
    },
  });
  const {data} = await res.json();
  return (
    <div>
      <div className="">
       
        <Image
          className="my-12 w-full"
          src={data.link}
          alt={data.title}
          width={1000}
          height={1000}
          priority
        />
         <h2 className="text-4xl">{data.title}</h2>
        <h1 className="text-lg ">{new Date(data.datetime).toDateString()}</h1>
        <h2>views: {data.views} </h2>
        <h2>votes: {data?.vote || 0} </h2>
        <p className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
          {data.favorite}
        </p>
      </div>
      <div className="my-4">
        <p className="text-lg">{data.description}</p>
      </div>
    </div>
  );
}
