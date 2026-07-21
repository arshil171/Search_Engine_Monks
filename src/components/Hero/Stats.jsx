const stats = [
  { number: "500+", title: "Projects Completed" },
  { number: "250+", title: "Happy Clients" },
  { number: "10+", title: "Years Experience" },
  { number: "98%", title: "Success Rate" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0E6A4A]">
            {item.number}
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-gray-500 font-medium">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;