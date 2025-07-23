const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center w-full">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="bg-gray-200 animate-pulse rounded shadow"
          style={{
            minWidth: "180px",
            maxWidth: "220px",
            height: "150px",
            flex: "1 0 180px",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
