
function HoverPortfolio() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-Montserrrat bg-black bg-opacity-70 text-white gap-y-6">
      <p className="italic font-semibold text-sm">coded, designed</p>
      <h3 className="font-bold text-2xl tracking-widest">eatsome.</h3>
      <p className="font-medium text-sm">
        Restaurant browsing in React.js (Using Yelp API){" "}
      </p>
      <div className="flex flex-row items-center justify-center gap-x-3">
        <div className="text-sm border-l-2 border-r-2 py-1 px-7 tracking-wider">
          DEMO
        </div>
        <div className="text-sm border-l-2 border-r-2 py-1 px-7 tracking-wider">
          MORE
        </div>
      </div>
    </div>
  );
}

export default HoverPortfolio