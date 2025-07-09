import expense1 from "../asset1/expense.png";
import stopwatch1 from "../asset1/stopwatch.png";
import weather1 from '../asset1/weather.png';
import port1 from '../asset1/port.png';
import gallery1 from "../asset1/gallery.png"
import todo1 from '../asset1/todo.png';
import todo from "../vedio/to-do.webm";
import expense from "../vedio/expensive_tracker.webm";
import gallery from "../vedio/gallary.webm";
import port from "../vedio/portfolio.webm";
import weather from "../vedio/weather.webm";
import stopwatch from "../vedio/stopwatch.webm";



function SelfProjects() {
    const projects = [
        {
            id: 1,
            title: "Stopwatch",
            description: "A Stopwatch application built with React.js, allowing users to start, stop, and reset the timer.",
            image: stopwatch1,
            video: stopwatch,
            LinktoView: "https://stopwatch1-qs25.vercel.app/",
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "A Portfolio website built with React.js, showcasing my skills, projects, and experience.",
            image: port1,
            video: port,
            LinktoView: "https://akilaport.vercel.app",
        },
        {
            id: 3,
            title: "Weather App",
            description: "A Weather App built with React.js, providing real-time weather updates and forecasts for any location.",
            image: weather1,
            video: weather,
            LinktoView: "https://weather-app-in-react-tau.vercel.app",
        },
        {
            id: 4,
            title: "To-do List",
            description: "A simple To-do List application built with React.js, allowing users to add, delete, and mark tasks as completed.",
            image: todo1,
            video: todo,
            LinktoView: "https://todo-list-react-three-mu.vercel.app",
        },
        {
            id: 5,
            title: "Gallery Management System",
            description: "A Gallery Management System built with React.js, allowing users to view, add, and delete images.",
            image: gallery1,
            video: gallery,
            LinktoView: "https://your-gallery-url.vercel.app",
        },
        {
            id: 6,
            title: "Expense Tracker",
            description: "An Expense Tracker application built with React.js, allowing users to track their expenses and manage their budget.",
            image: expense1,
            video: expense,
            LinktoView: "https://expensive-tracker-in-react.vercel.app/",
        },
    ];

    return (
        <section id="popular" className="text-[#063970]">
            <div className="container grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full">
                {projects.map((item) => (
                    <div
                        key={item.id}
                        className="popular_card bg-[#eeeee4] p-10 pt-20 rounded-md relative overflow-hidden group"
                    >
                        {/* Image */}
                        <div className="relative w-full h-32 bg-[#eeeee4] rounded-md overflow-hidden group">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover absolute inset-0 duration-300 group-hover:opacity-0"
                            />

                            <video
                                src={item.video}
                                className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                autoPlay
                                muted
                                loop
                                playsInline
                            ></video>
                        </div>

                        {/* Text Content with Left Alignment on Mobile */}
                        <div className="text-start">
                            <p className="italic mt-5">Title: {item.title}</p>
                            <h5 className="font-medium mt-2">Description: {item.description}</h5>
                            <p>
                                View:{" "}
                                <a
                                    href={item.LinktoView}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 underline break-all"
                                >
                                    {item.LinktoView}
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}

export default SelfProjects;
