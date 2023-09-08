import { use } from 'react';

async function getBlogData(id?: string) {
  const endpoint = id ? `/${id}` : ``;
  const result = await fetch(
    `https://suehiro.microcms.io/api/v1/blogs${endpoint}`,
    {
      headers: {
        'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY as string,
      },
    },
  ).then((res) => res.json());
  return result;
}

export function blogData(param: any) {
  const data = use(getBlogData(param));
  console.log(data);
  return data;
}
