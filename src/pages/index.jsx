import { Link, Outlet } from "react-router-dom";
import Pic1 from "../assets/19013_2.gif";
import Pic2 from "../assets/SHUTTERSTOCK.jpg";

const callouts = [
    {
        // name: 'Desk and Office',
        // description: 'Work from home accessories',
        name: 'Robin (蔡家洋)',
        description: 'Chia-Yang Tsai',
        imageSrc: Pic1,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        // name: 'Self-Improvement',
        // description: 'Journals and note-taking',
        name: 'M.S. in Electrical Engineering',
        description: 'National Taiwan University (NTU)',
        // imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageSrc: 'https://scontent.ftpe7-3.fna.fbcdn.net/v/t31.18172-8/18588810_1344443432300046_1042641851849514143_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=6A1ecY_HFjsAX_w_szP&_nc_ht=scontent.ftpe7-3.fna&oh=00_AfBx71oSkY4e0MlNoWIq_ZzPrXwkoeI0m0uiA0zKmKvwdw&oe=6453D464',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        // name: 'Travel',
        // description: 'Daily commute essentials',
        name: 'R11921A03',
        description: 'r11921a03@ntu.edu.tw',
        imageSrc: Pic2, //reference: PIXEL-SHOT/SHUTTERSTOCK
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

export default function RootLayout() {
    return (
        <div className="text-2xl font-bold text-gray-900">
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
export function RootIndex() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-3xl font-bold text-gray-900">Intro</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}