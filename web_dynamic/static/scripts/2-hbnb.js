$(document).ready(function() {
	let checkedAmenities = {};
	$.get('http://0.0.0.0:5001/api/v1/status/').done(function {
		if (data.status === "OK") {
			$('#api_status').addClass('available');
		else
			$('#api_status').removeClass('available');
		});
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
