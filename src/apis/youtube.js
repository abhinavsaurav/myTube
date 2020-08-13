import Axios from "axios";

const KEY = "AIzaSyBYMh1Q9Y-WEBT9eJS7ITZN-7MmzWjtBmk";

export default Axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
