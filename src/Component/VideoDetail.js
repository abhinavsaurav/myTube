import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>please search something</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="ui segment">
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<h4 className="ui header">
				<div>{video.snippet.title}</div>
			</h4>
			<p className="">{video.snippet.description}</p>
		</div>
	);
};

export default VideoDetail;
