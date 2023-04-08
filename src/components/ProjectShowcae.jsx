import image1 from '@/images/photos/AlmostHomeWyoming.png'
import image2 from '@/images/photos/Ruggedwerx.png'
import image3 from '@/images/photos/WaterforWildlife.png'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    title: 'Almost Home Wyoming Website',
    href: 'https://almosthomewyoming.org/',
    description:
      'An organization helping those in need find a place they can call home',
    imageUrl: image1,
    date: 'Feb 1, 2023',
    datetime: '2023-02-01',
    category: { title: 'Custom Svelte', href: '#' },
  },
  {
    id: 2,
    title: 'Ruggedwerx Fabrication Company Website',
    href: 'https://ruggedwerx.com/',
    description:
      'A company providing quality fabrication services to the Wyoming community',
    imageUrl: image2,
    date: 'June 24, 2016',
    datetime: '2016-06-24',
    category: { title: 'Custom Wordpress', href: '#' },
  },
  {
    id: 3,
    title: 'Water for Wildlife - Museum Exhibit',
    href: 'https://github.com/bengroneman/waterforwildlife',
    description:
      'A custom Linux build on a Raspberry Pi to showcase crucial role Hunters play in Wildlife conservation',
    imageUrl: image3,
    date: 'Jun 24, 2022',
    datetime: '2022-06-24',
    category: { title: 'Custom Linux', href: '#' },
  },
]
export function ProjectShowcase() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  loading={"lazy"}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-zinc-800 dark:text-zinc-100">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-zinc-800 dark:text-zinc-100 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-zinc-800 dark:text-zinc-100">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
