/* eslint-disable @next/next/no-img-element */
const data = [
    {
        name: 'Artemio Arzate Salazar',
        title: 'CEO & Founder  Tarimas y Pallets México',
        url: '/avatar.webp',
        country: 'MX'
    }
]

interface Props {
    name: string;
    title: string;
    url: string;
    country: string;
}

function Speakers({ name, title, url, country }: Props) {
    return (
        <article className="relative flex flex-col items-center justify-center w-full transition-all dark:bg-[#121226]/50 border dark:border-slate-700 rounded-[20px] group overflow-hidden hover:scale-110">
            <div className="w-full p-[14px] rounded transition">
                <figure className="flex items-center justify-center">
                    <img src={url} alt={name} className="object-cover w-full aspect-square rounded-[10px]" />
                    <img src={url} alt={name} className="absolute opacity-70 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]" />
                </figure>
                <header className="flex-1 items-center justify-between mt-4 gap-x-2">
                    <h3 className="text-[16px] font-bold text-left dark:text-white">
                        {name}

                    </h3>


                </header>

                <footer className="flex items-center justify-between gap-x-3 ">
                    <p className="text-xs text-left dark:text-white/70 font-semibold">{title}</p>
                    <span className="font-bold text-xs dark:text-white">{country}</span>
                </footer>
            </div>


        </article>
    )
}
export const Avatar = () => {
    return (
        <section className="flex flex-col flex-wrap items-center justify-center max-w-5xl px-4 pt-20 mx-auto">
            <h2 className="text-3xl font-bold text-center dark:text-white">
                Sobre Nuestro Lider
            </h2>
            <div className="w-64 h-64 my-16 flex items-center justify-center gap-x-8 gap-y-8">
                {data.map((speaker) => (
                    <Speakers key={speaker.name} {...speaker} />
                ))}
            </div>

        </section>
    )
}