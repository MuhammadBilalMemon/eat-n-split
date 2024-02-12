import { useState } from "react";
import { Button } from "./Components/Button";
import { FriendList } from "./Components/FriendList";
import { FromAddFriend } from "./Components/FromAddFriend";
import { FromSliptBuild } from "./Components/FromSliptBuild";

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];


export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);

  function handleShowAddFriend() {
    setShowFriend((show) => !show)
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showFriend && <FromAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showFriend ? "Close" : "Add Friend"}</Button >
      </div>
      <FromSliptBuild />
    </div>
  )
}


