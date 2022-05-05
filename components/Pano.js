import * as PANOLENS from "panolens";
console.log(PANOLENS);
const panorama = new PANOLENS.ImagePanorama("/img/3d-image.jpg");
console.log(panorama);
const viewer = new PANOLENS.Viewer({
	container: document.querySelector("#panaroma"),
});
console.log(viewer);
viewer.add(panorama);
const Pano = () => {
	return (
		<div id="panaroma" htmlstyle="height:100%">
			{}
		</div>
	);
};

export default Pano;
