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
  {
    id: 496479,
    name: "John Smith",
    image: "https://i.pravatar.cc/48?u=496479",
    balance: 15,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowFriend((show) => !show)
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend]);
    setShowFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowFriend(false);
  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend => friend.id === selectedFriend.id
        ?
        { ...friend, balance: friend.balance + value }
        : friend))

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showFriend && <FromAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{showFriend ? "Close" : "Add Friend"}</Button >
      </div>
      {
        selectedFriend &&
        <FromSliptBuild selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />
      }
    </div>
  )
}


