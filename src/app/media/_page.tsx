import { Play, Image as ImageIcon, Music } from "lucide-react";

export default function Media() {
  // const [activeTab, setActiveTab] = useState<"photos" | "videos" | "audio">(
  //   "photos"
  // );

  // const photos = [
  //   {
  //     id: 1,
  //     url: "https://images.pexels.com/photos/8520626/pexels-photo-8520626.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     title: "Concert in de kerk",
  //   },
  //   {
  //     id: 2,
  //     url: "https://images.pexels.com/photos/7520408/pexels-photo-7520408.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     title: "Repetitie samen",
  //   },
  //   {
  //     id: 3,
  //     url: "https://images.pexels.com/photos/7520407/pexels-photo-7520407.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     title: "Optreden 2024",
  //   },
  //   {
  //     id: 4,
  //     url: "https://images.pexels.com/photos/7520390/pexels-photo-7520390.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     title: "Kerstconcert",
  //   },
  //   {
  //     id: 5,
  //     url: "https://images.pexels.com/photos/8520625/pexels-photo-8520625.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     title: "Samen zingen",
  //   },
  //   {
  //     id: 6,
  //     url: "https://images.pexels.com/photos/7520384/pexels-photo-7520384.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     title: "Gospelkoor Candela",
  //   },
  // ];

  // const videos = [
  //   {
  //     id: 1,
  //     title: "Highlight Kerstconcert 2023",
  //     thumbnail:
  //       "https://images.pexels.com/photos/7520390/pexels-photo-7520390.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     duration: "3:45",
  //   },
  //   {
  //     id: 2,
  //     title: "Amazing Grace - Live optreden",
  //     thumbnail:
  //       "https://images.pexels.com/photos/8520626/pexels-photo-8520626.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     duration: "4:20",
  //   },
  //   {
  //     id: 3,
  //     title: "Repetitie impressie",
  //     thumbnail:
  //       "https://images.pexels.com/photos/7520408/pexels-photo-7520408.jpeg?auto=compress&cs=tinysrgb&w=400",
  //     duration: "2:15",
  //   },
  // ];

  // const audioTracks = [
  //   {
  //     id: 1,
  //     title: "Oh Happy Day",
  //     album: "Live opnames 2024",
  //     duration: "4:32",
  //   },
  //   {
  //     id: 2,
  //     title: "Total Praise",
  //     album: "Live opnames 2024",
  //     duration: "5:18",
  //   },
  //   {
  //     id: 3,
  //     title: "Shackles",
  //     album: "Live opnames 2024",
  //     duration: "3:55",
  //   },
  //   {
  //     id: 4,
  //     title: "Amazing Grace",
  //     album: "Klassiekers",
  //     duration: "4:45",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-tertiary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Media</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Bekijk en beluister hoogtepunten van onze optredens en repetities
          </p>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("photos")}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === "photos"
                ? "text-tertiary border-b-2 border-tertiary"
                : "text-gray-600 hover:text-tertiary"
            }`}
          >
            <ImageIcon className="h-5 w-5" />
            Foto's
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === "videos"
                ? "text-tertiary border-b-2 border-tertiary"
                : "text-gray-600 hover:text-tertiary"
            }`}
          >
            <Play className="h-5 w-5" />
            Video's
          </button>
          <button
            onClick={() => setActiveTab("audio")}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              activeTab === "audio"
                ? "text-tertiary border-b-2 border-tertiary"
                : "text-gray-600 hover:text-tertiary"
            }`}
          >
            <Music className="h-5 w-5" />
            Audio
          </button>
        </div>

        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-semibold p-4">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Play
                        className="h-8 w-8 text-tertiary ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "audio" && (
          <div className="space-y-4">
            {audioTracks.map((track) => (
              <div
                key={track.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <button className="w-12 h-12 bg-tertiary rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                      <Play className="h-6 w-6 text-white ml-1" fill="white" />
                    </button>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {track.title}
                      </h3>
                      <p className="text-sm text-gray-600">{track.album}</p>
                    </div>
                  </div>
                  <span className="text-gray-600">{track.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
}
