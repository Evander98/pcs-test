const profiles = [
  {
    name: "Jefril",
    location: "Sahid",
    imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Zasami",
    location: "BSD",
    imgSrc: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Sam",
    location: "Sahid",
    imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Aldo",
    location: "Sahid",
    imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Erwin",
    location: "Sahid",
    imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Arye",
    location: "BSD",
    imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Risya",
    location: "BSD",
    imgSrc: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Nesha",
    location: "WFH",
    imgSrc: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  { name: "More", location: "10 more", imgSrc: "", isMore: true },
];

export const Online = () => {
  return (
    <div className="px-5 mt-5">
      <p className="font-bold">Online</p>
      <div className="flex rounded-xl shadow-lg p-3">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className={`relative w-full ${index !== 0 && "-ml-3.5"}`}
          >
            <div className="relative text-center">
              <div className="aspect-square flex items-center justify-center">
                {profile.isMore ? (
                  <div className="p-1 bg-white rounded-full w-max -z-10">
                    <div className="w-10 h-10 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {profile.location}
                    </div>
                  </div>
                ) : (
                  <div className="p-1 bg-white rounded-full w-max">
                    <img
                      src={profile.imgSrc}
                      alt={profile.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                )}
              </div>
              {!profile.isMore && (
                <>
                  <p className="text-[0.6rem] font-bold">{profile.name}</p>
                  <p className="text-[0.6rem] text-gray-500">
                    {profile.location}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
