import { Friend } from "./Friend";

export function FriendList({ friends, onSelection, selectedFriend }) {
    console.log("Friend List");
    console.log(selectedFriend);
    return (
        <ul>
            {friends.map(friend => <Friend friend={friend} key={friend.id} selectedFriend={selectedFriend} onSelection={onSelection} />
            )}
        </ul>
    );
}
