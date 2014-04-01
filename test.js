var q = new Dribbble("qrpike", 20);


q.getShotList( 1, "popular", function(data){
	console.log('Shot list',data);
});

q.getShot( 1406364, function(data){
	console.log('Shot',data);
});

q.getPlayer( function(data){
	console.log('Player',data);
});

q.getPlayerShots( 1, function(data){
	console.log('Player shots',data);
});

q.getPlayerFollowers( 1, function(data){
	console.log('Player followers',data);
});

q.getPlayerFollowing( 1, function(data){
	console.log('Player following',data);
});

q.getPlayerDraftees( 1, function(data){
	console.log('Player draftees',data);
});

q.getShotRebounds( 1, 1406364, function(data){
	console.log('Shot rebounds',data);
});

q.getPlayerShotsFollowing( 1, function(data){
	console.log('Player shots following',data);
});

q.getPlayerShotsFollowing( 1, function(data){
	console.log('Player shots likes',data);
});