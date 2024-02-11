import { Friend } from "./Friend";
import { initialFriends } from "../App";

export function FriendList() {

    const friends = initialFriends;

    return (
        <ul>
            {friends.map(friend => <Friend friend={friend} key={friend.id} />
            )}
        </ul>
    );
}