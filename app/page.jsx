import Item from "./Item";

const imageTypes = ["image/jpeg", "image/gif", "image/png", "image/webp"];

export default async function Home() {
  
  const data1 = await fetch(
    `https://api.imgur.com/3/gallery/top/viral/week/1?showViral=true`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.CLIENT_KEY}`,
      },
    }
  );
  let res = await data1.json();
  res = res?.data?.filter((item) =>
    item?.images?.some((img) => imageTypes.includes(img.type))
  );
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {res &&
          res.map((item) => (
            <Item
              key={item.id}
              title={item.title}
              datetime={item.datetime}
              links={item.images}
            />
          ))}
      </div>
    </main>
  );
}
