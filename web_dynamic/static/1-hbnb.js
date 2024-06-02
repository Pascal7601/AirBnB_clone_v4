$(document).ready(function() {
	let checkedAmenities = {};
	function() updateAmenities{
		$("#check").change(function() {
			let amenityId = $(this).data('id');
			let amenityName = $(this).data('name')

			if ($(this).is(':checked') {
				checkedAmenities[amenityId] = amenityName;
			} else {
				delete checkedAmenities[amenityId];
			}
			updateAmenities();
		});
		)};
});
