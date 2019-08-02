import friends from '../data';

module.exports = routes => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('api/newfriend', (req, res) => {
        const newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        }

        for (let x = 2; x < req.body.length; x++) {
            newFriend.scores.push(req.body[x]);
        }

        let bestFriend = {};
        let bestFriendDiff = 1000;

        friends.forEach(el => {
            let diff = 0;
            for (x=0; x < el.scores.length; x++) {
                diff += Math.abs(el.scores[x] - newFriend.scores[x]);
            }
            if (diff < bestFriendDiff) {
                bestFriendDiff = diff;
                bestFriend = el;
            }
        });
        friends.push(newFriend);
        res.json(bestFriend);
    })
}